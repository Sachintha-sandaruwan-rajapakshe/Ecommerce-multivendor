package com.sachi.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Cart;
import com.sachi.Model.Coupon;
import com.sachi.Model.User;
import com.sachi.Service.CartService;
import com.sachi.Service.CouponService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminCouponController {
	
	private final CouponService couponService;
	private final UserService userService;
	private final CartService cartService;
	
	
	@PostMapping("/apply")
	public ResponseEntity<Cart> applyCoupon(
			@RequestHeader("Authorization")String jwt,
			@RequestParam String apply, 
			@RequestParam String code, 
			@RequestParam double orderValue ) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Cart cart = null;
		
		if (apply.equals("true")) {
			cart =couponService.applyCoupon(code, orderValue, user);
		}else {
			cart = couponService.removeCoupon(code, user);
		}
		return ResponseEntity.ok(cart);
	}
	
	@PostMapping("/admin/create")
	public ResponseEntity<Coupon> createCoupon(@RequestBody Coupon coupon){
		Coupon createCoupon = couponService.createCoupon(coupon);
		return ResponseEntity.ok(createCoupon);
	}
	
	public ResponseEntity<?> deleteCoupon(@RequestParam Long id) throws Exception{
		couponService.deleteCoupon(id);
		return ResponseEntity.ok("Coupon deleted successful");
		
	}
	

}
