package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.OrderStatus;
import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Order;
import com.sachi.Model.Seller;
import com.sachi.Model.User;
import com.sachi.Service.OrderService;
import com.sachi.Service.SellerService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/seller/orders")
public class SellerOrderController {
	
	private final OrderService orderService;
	private final SellerService sellerService;
	private final UserService userService;
	
	@GetMapping()
	public ResponseEntity<List<Order>> getAllOrdersHandler(@RequestHeader("Authorization")String jwt)throws Exception{
		Seller seller = sellerService.getSellerProfile(jwt);
		List<Order> order = orderService.sellersOrder(seller.getId());
		
		return new ResponseEntity<List<Order>>(order,HttpStatus.ACCEPTED);
		
	}
	
	@PatchMapping("/{orderId}/{orderStatus}")
	public ResponseEntity<Order> updateOrderHandler(@PathVariable OrderStatus orderStatus, 
			@PathVariable Long orderId, 
			@RequestHeader("Authorization")String jwt)throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Order order = orderService.updateOrderStatus(orderId, orderStatus);
		return new ResponseEntity<Order>(order,HttpStatus.OK);
		
	}
	
	
	

}
