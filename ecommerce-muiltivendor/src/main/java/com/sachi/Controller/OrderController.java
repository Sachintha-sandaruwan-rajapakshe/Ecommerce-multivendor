package com.sachi.Controller;

import java.util.List;
import java.util.Set;

import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.PaymentMethod;
import com.sachi.Model.Address;
import com.sachi.Model.Cart;
import com.sachi.Model.Order;
import com.sachi.Model.OrderItem;
import com.sachi.Model.PaymentOrder;
import com.sachi.Model.Seller;
import com.sachi.Model.SellerReport;
import com.sachi.Model.User;
import com.sachi.Response.PaymentLinkResponse;
import com.sachi.Service.CartService;
import com.sachi.Service.OrderService;
import com.sachi.Service.SellerReportService;
import com.sachi.Service.SellerService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/orders")
public class OrderController {
	private final UserService userService;
	private final CartService cartService;
	private final OrderService orderService;
	private final SellerService sellerService;
	private final SellerReportService sellerReportService;
	
	@PostMapping()
	public ResponseEntity<PaymentLinkResponse> createOrderHandler(
			@RequestBody Address shippingAddress,
			@RequestParam PaymentMethod paymentMethod, 
			@RequestHeader("Authorization")String jwt) throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		Cart cart =cartService.findUserCart(user);
		
		Set<Order> orders = orderService.createOrder(user, shippingAddress, cart);
		
		//PaymentOrder paymentOrder =PaymentService.
		
		PaymentLinkResponse paymentLinkResponse = new PaymentLinkResponse();
		
		return new ResponseEntity<PaymentLinkResponse>(paymentLinkResponse,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<Order>> userOrderHitoryHandler(@RequestHeader("Authorization")String jwt)throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		List<Order> orderHistory = orderService.userOrderHistory(user.getId());
		
		return new ResponseEntity<List<Order>>(orderHistory,HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/{orderId}")
	public ResponseEntity<Order> getOrderById(@RequestHeader("Authorization")String jwt,@PathVariable Long orderId)throws Exception {
		User user =userService.findUserByJwtToken(jwt);
		Order getOrder = orderService.findOrderById(orderId);
		
		return new ResponseEntity<Order>(getOrder,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/item/{orderItemId}")
	public ResponseEntity<OrderItem> getOrderItemById(@RequestHeader("Authorization")String jwt,@PathVariable Long orderItemId)throws Exception {
		User user =userService.findUserByJwtToken(jwt);
		OrderItem getOrderItem = orderService.getOrderItemById(orderItemId);
		
		return new ResponseEntity<OrderItem>(getOrderItem,HttpStatus.ACCEPTED);
	}
	
	
	@PutMapping("/{orderId}/cancel")
	public ResponseEntity<Order> cancelOrder(@RequestHeader("Authorization")String jwt,@PathVariable Long orderId)throws Exception {
		User user =userService.findUserByJwtToken(jwt);
		Order getOrderItem = orderService.cancleOrder(user, orderId);
		
		Seller seller =sellerService.getSellerbyId(getOrderItem.getSellerId());
		SellerReport sellerReport = sellerReportService.getSellerReport(seller);
		
		sellerReport.setCanceledOrders(sellerReport.getCanceledOrders()+1);
		sellerReport.setTotalRefunds(sellerReport.getTotalRefunds()+getOrderItem.getTotalSellingPrice());
		sellerReportService.updateSellerReport(sellerReport);
		
		return new ResponseEntity<Order>(getOrderItem,HttpStatus.ACCEPTED);
	}
	
	
	
}
