package com.sachi.Controller;

import java.util.Iterator;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Order;
import com.sachi.Model.PaymentOrder;
import com.sachi.Model.Seller;
import com.sachi.Model.SellerReport;
import com.sachi.Model.User;
import com.sachi.Response.ApiResponse;
import com.sachi.Response.PaymentLinkResponse;
import com.sachi.Service.OrderService;
import com.sachi.Service.PaymentService;
import com.sachi.Service.SellerReportService;
import com.sachi.Service.SellerService;
import com.sachi.Service.TransactionService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {
	
	private final PaymentService paymentService;
	private final UserService userService;
	private final SellerService sellerService;
	private final SellerReportService sellerReportService;
	private final TransactionService transactionService;
	
	public ResponseEntity<ApiResponse> paymentSuccessHandler(@PathVariable String paymentId, @RequestParam String paymentLinkId,@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.findUserByJwtToken(jwt);
		
		PaymentLinkResponse paymentLinkResponse;
		
		PaymentOrder paymentOrder = paymentService.getPaymentOrderByPaymentId(paymentId);
		
		Boolean paymentSuccess = paymentService.proceedPaymentOrder(paymentOrder, paymentId, paymentLinkId, null);
		
		if(paymentSuccess) {
			for (Order order :paymentOrder.getOrders()) {
				transactionService.createTransaction(order);
				Seller seller = sellerService.getSellerbyId(order.getSellerId());
				SellerReport report =sellerReportService.getSellerReport(seller);
				report.setTotalOrder(report.getTotalOrder()+1);
				report.setTotalEarnings(report.getTotalEarnings()+order.getTotalSellingPrice());
				report.setTotalSale(report.getTotalSale()+order.getOrderItems().size());
				sellerReportService.updateSellerReport(report);
			}
		}
		
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessange("Payment Success..!");
		
		return new ResponseEntity<ApiResponse>(apiResponse,HttpStatus.CREATED);
	}

}
