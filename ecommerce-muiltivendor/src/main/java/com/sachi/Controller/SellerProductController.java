package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Exceptions.ProductException;
import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Product;
import com.sachi.Model.Seller;
import com.sachi.Request.CreateProductRequest;
import com.sachi.Service.ProductService;
import com.sachi.Service.SellerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/sellers/products")
@RequiredArgsConstructor
public class SellerProductController {
	
	private final ProductService productService;
	private final SellerService sellerService;
	
	@GetMapping()
	public ResponseEntity<List<Product>>getProductBySellerId(@RequestHeader("Authorization")String jwt)throws ProductException,SellerException{
		Seller seller =sellerService.getSellerProfile(jwt);
		List<Product> products =productService.getProductBySellerId(seller.getId());
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<Product> createProduct(@RequestBody CreateProductRequest createProductRequest,@RequestHeader("Authorization")String jwt)throws ProductException,SellerException{
		Seller seller =sellerService.getSellerProfile(jwt);
		Product createNewProduct = productService.createProduct(createProductRequest, seller);
		return new ResponseEntity<Product>(createNewProduct,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{productId}")
	public ResponseEntity<Product>deleteProduct(@PathVariable Long productId)throws ProductException,SellerException{
		Product deleteProducts =productService.deleteProduct(productId);
		return new ResponseEntity<Product>(deleteProducts,HttpStatus.OK);
	}
	
	@PutMapping("/{productId}")
	public ResponseEntity<Product>updateProduct(@PathVariable Long productId,@RequestBody Product product)throws ProductException,SellerException{
		try {
			Product updateProduct =productService.updateProduct(productId,product);
			return new ResponseEntity<Product>(updateProduct,HttpStatus.OK);
		} catch (ProductException e) {
			return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
		}
		
	}
	
}
