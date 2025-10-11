package com.sachi.Service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.sachi.Exceptions.ProductException;
import com.sachi.Model.Product;
import com.sachi.Model.Seller;
import com.sachi.Request.CreateProductRequest;

public interface ProductService {
	
	public Product createProduct(CreateProductRequest req,Seller seller)throws ProductException;
	public Product deleteProduct(Long productId)throws ProductException;
	public Product updateProduct(Long productId,Product product)throws ProductException;
	public Product findProductById(Long productId)throws ProductException;
	public List<Product> searchProducts(String query)throws ProductException;
	public Page<Product> getAllProduct(String category,
			String brand,
			String color,
			String size,
			Integer minPrice,
			Integer maxPrice,
			Integer minDiscount,
			String sort,
			String stock,
			Integer pageNumber)throws ProductException;
	
	public List<Product>getProductBySellerId(Long sellerId)throws ProductException;
	
}
