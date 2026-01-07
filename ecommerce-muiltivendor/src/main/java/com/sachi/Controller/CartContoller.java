package com.sachi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Product;
import com.sachi.Model.User;
import com.sachi.Repository.CartItemRepository;
import com.sachi.Request.AddItemRequest;
import com.sachi.Response.ApiResponse;
import com.sachi.Service.CartItemService;
import com.sachi.Service.CartService;
import com.sachi.Service.ProductService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartContoller {
	
	private final CartItemService cartItemService;
	private final CartService cartService;
	private final UserService userService;
	private final ProductService productService;
	
	@GetMapping
	public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Cart cart = cartService.findUserCart(user);
		return new ResponseEntity<Cart>(cart,HttpStatus.OK);
		
	}
	
	@PutMapping("/add")
	public ResponseEntity<CartItem> addItemToCart(@RequestHeader("Authorization") String jwt, @RequestBody AddItemRequest req) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Product product =productService.findProductById(req.getProductId());
		CartItem cartItem = cartService.addCartitem(user, product, req.getSize(),req.getQuantity());
		
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessange("Item Added to Cart Successfully");
		return new ResponseEntity<CartItem>(cartItem,HttpStatus.OK);
		
	}
	@DeleteMapping("/item/{cartItemId}")
	public ResponseEntity<CartItem> deleteCartItemHandler(@RequestHeader("Authorization") String jwt,@PathVariable Long cartItemId  ) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		CartItem cartItem =cartItemService.removeCartItem(user.getId(), cartItemId);
		
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessange("Item delete from Cart Successfully");
		return new ResponseEntity<CartItem>(cartItem,HttpStatus.OK);
		
		
	}
	
	@PutMapping("/item/{cartItemId}")
	public ResponseEntity<CartItem> updateCartItemHandler(@RequestHeader("Authorization") String jwt,@PathVariable Long cartItemId , @RequestBody CartItem cartItem) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		CartItem updateCartItem = null;
		
		if (cartItem.getQuantity()>0) {
			updateCartItem = cartItemService.updateCartItem(user.getId() ,cartItemId,cartItem);
		}
		
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessange("Item updated Successfully");
		
		
		return new ResponseEntity<CartItem>(updateCartItem,HttpStatus.OK);
		
	}
	
	
}
