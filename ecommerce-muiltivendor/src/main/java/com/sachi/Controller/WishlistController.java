package com.sachi.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sachi.Model.Product;
import com.sachi.Model.User;
import com.sachi.Model.WishList;
import com.sachi.Service.ProductService;
import com.sachi.Service.UserService;
import com.sachi.Service.WishlistService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/api/wishlist")
@RequiredArgsConstructor
public class WishlistController {
	
	private final WishlistService wishlistService;
	private final UserService userService;
	private final ProductService productService;
	
	@GetMapping
	public ResponseEntity<WishList>getWishlistByUserId(@RequestHeader("Authorization")String jwt) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		WishList wishList = wishlistService.getWishlistByuserId(user);
		return ResponseEntity.ok(wishList);
	}
	
	@PostMapping("/add-product/{productId}")
	public ResponseEntity<WishList>addProductToWishlist(@RequestHeader("Authorization")String jwt ,@PathVariable Long productId) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Product product = productService.findProductById(productId);
		
		WishList wishList = wishlistService.addProductToWishlist(user, product);
		
		
		return ResponseEntity.ok(wishList);
	}
	

}
