package com.sachi.Service.ServiceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.sachi.Exceptions.ProductException;
import com.sachi.Model.Category;
import com.sachi.Model.Product;
import com.sachi.Model.Seller;
import com.sachi.Repository.CategoryRepository;
import com.sachi.Repository.ProductRepository;
import com.sachi.Repository.SellerRepository;
import com.sachi.Request.CreateProductRequest;
import com.sachi.Service.ProductService;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final SellerRepository sellerRepository;

    @Override
    public Product createProduct(CreateProductRequest req, Seller seller) throws ProductException {
        // Create category hierarchy if not exist
        Category category1 = categoryRepository.findByCategoryId(req.getCategory());
        if (category1 == null) {
            category1 = new Category();
            category1.setCategoryId(req.getCategory());
            category1.setLevel(1);
            category1 = categoryRepository.save(category1);
        }

        Category category2 = categoryRepository.findByCategoryId(req.getCategory2());
        if (category2 == null) {
            category2 = new Category();
            category2.setCategoryId(req.getCategory2());
            category2.setLevel(2);
            category2.setParentCatecory(category1);
            category2 = categoryRepository.save(category2);
        }

        Category category3 = categoryRepository.findByCategoryId(req.getCategory3());
        if (category3 == null) {
            category3 = new Category();
            category3.setCategoryId(req.getCategory3());
            category3.setLevel(3);
            category3.setParentCatecory(category2);
            category3 = categoryRepository.save(category3);
        }

        int discountPercentage = calculateDiscountPercentage(req.getMrpPrice(), req.getSellingPrice());

        Product product = new Product();
        product.setSeller(seller);
        product.setCategory(category3);
        product.setColor(req.getColor());
        product.setCreatedAt(LocalDateTime.now());
        product.setDescription(req.getDescription());
        product.setImages(req.getImages());
        product.setMrpPrice(req.getMrpPrice());
        product.setNumRatings(0);
        product.setQuantity(1);
        product.setSellingPrice(req.getSellingPrice());
        product.setTitle(req.getTitle());
        product.setSize(req.getSize());
        product.setDiscountPercent(discountPercentage);

        return productRepository.save(product);
    }

    private int calculateDiscountPercentage(int mrpPrice, int sellingPrice) {
        if (mrpPrice <= 0) {
            throw new IllegalArgumentException("MRP must be greater than zero");
        }
        return (int) Math.round(((mrpPrice - sellingPrice) * 100.0) / mrpPrice);
    }

    @Override
    public Product deleteProduct(Long productId) throws ProductException {
        Product product = findProductById(productId);
        if (product == null) {
            throw new ProductException("Product not found with id: " + productId);
        }
        productRepository.delete(product);
        return product;
    }


    @Override
    public Product updateProduct(Long productId, Product product) throws ProductException {
        Product existingProduct = findProductById(productId);

        if (product.getTitle() != null) existingProduct.setTitle(product.getTitle());
        if (product.getDescription() != null) existingProduct.setDescription(product.getDescription());
        if (product.getColor() != null) existingProduct.setColor(product.getColor());
        if (product.getImages() != null && !product.getImages().isEmpty()) existingProduct.setImages(product.getImages());
        if (product.getSize() != null) existingProduct.setSize(product.getSize());
        if (product.getMrpPrice() > 0) existingProduct.setMrpPrice(product.getMrpPrice());
        if (product.getSellingPrice() > 0) existingProduct.setSellingPrice(product.getSellingPrice());
        if (product.getQuantity() > 0) existingProduct.setQuantity(product.getQuantity());
        if (product.getCategory() != null) existingProduct.setCategory(product.getCategory());

        // Recalculate discount after price update
        int discountPercentage = calculateDiscountPercentage(existingProduct.getMrpPrice(), existingProduct.getSellingPrice());
        existingProduct.setDiscountPercent(discountPercentage);

        return productRepository.save(existingProduct);
    }

    @Override
    public Product findProductById(Long productId) throws ProductException {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ProductException("Product not found with id " + productId));
    }

    @Override
    public Page<Product> getAllProduct(String category, String brand, String color, String size,
                                       Integer minPrice, Integer maxPrice, Integer minDiscount,
                                       String sort, String stock, Integer pageNumber) throws ProductException {

        Specification<Product> spec = (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (category != null) {
                Join<Object, Object> categoryJoin = root.join("category");
                predicates.add(criteriaBuilder.equal(categoryJoin.get("categoryId"), category));
            }																					//get("brand") adala colum eke table eke
            if (brand != null) predicates.add(criteriaBuilder.equal(root.get("brand"), brand));// root= table eke
            if (color != null) predicates.add(criteriaBuilder.equal(root.get("color"), color));//criteriaBuilder = WHERE...AND,OR
            if (size != null) predicates.add(criteriaBuilder.equal(root.get("size"), size));   //predicates = filter ekata add karaganna e value eka
            if (minPrice != null) predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("sellingPrice"), minPrice));
            if (maxPrice != null) predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("sellingPrice"), maxPrice));
            if (minDiscount != null) predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("discountPercent"), minDiscount));
            if (stock != null && stock.equalsIgnoreCase("inStock")) predicates.add(criteriaBuilder.greaterThan(root.get("quantity"), 0));
            else if (stock != null && stock.equalsIgnoreCase("outOfStock")) predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("quantity"), 0));

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };

        Sort sorting = Sort.by("sellingPrice");
        if ("desc".equalsIgnoreCase(sort)) sorting = sorting.descending();
        else sorting = sorting.ascending();

        int pageSize = 10;
        Pageable pageable = PageRequest.of(pageNumber, pageSize, sorting);

        Page<Product> products = productRepository.findAll(spec, pageable); //public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> 

        if (products.isEmpty()) throw new ProductException("No products found with given criteria");

        return products;
    }

    @Override
    public List<Product> getProductBySellerId(Long sellerId) throws ProductException {
        Seller seller = sellerRepository.findById(sellerId)
                .orElseThrow(() -> new ProductException("Seller not found with id " + sellerId));

        return productRepository.findBySeller(seller);
    }

	@Override
	public List<Product> searchProducts(String query) throws ProductException {
		
		return productRepository.searchProducts(query);
	}
}
