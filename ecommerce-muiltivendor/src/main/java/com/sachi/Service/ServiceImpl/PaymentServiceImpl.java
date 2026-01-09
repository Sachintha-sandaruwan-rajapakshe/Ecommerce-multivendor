package com.sachi.Service.ServiceImpl;

import java.util.Set;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.sachi.Domain.PaymentMethod;
import com.sachi.Domain.PaymentOrderStatus;
import com.sachi.Domain.PaymentStatus;
import com.sachi.Model.Order;
import com.sachi.Model.PaymentOrder;
import com.sachi.Model.User;
import com.sachi.Repository.OrderRepository;
import com.sachi.Repository.PaymentOrderRepository;
import com.sachi.Service.PaymentService;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.billingportal.SessionCreateParams;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
	
	private final PaymentOrderRepository paymentOrderRepository;
	private final OrderRepository orderRepository;
	
	private String apiKey = "apiKey";
	private String apiSecret = "apiSecret";
	private String stripeApiKey = "stripeApiKey";
	private String stripeSecretKey = "stripeSecretKey";
	@Override
	public PaymentOrder createPaymentOrder(User user, Set<Order> orders) throws Exception {
		Long amount = orders.stream().mapToLong(Order::getTotalSellingPrice).sum();
		
		PaymentOrder newPayment = new PaymentOrder();
		
		newPayment.setAmout(amount);
		newPayment.setUser(user);
		newPayment.setOrders(orders);
		
		return paymentOrderRepository.save(newPayment);
	}
	@Override
	public PaymentOrder getPaymentOrderById(Long orderId) throws Exception {
		
		return paymentOrderRepository.findById(orderId).orElseThrow(()-> new Exception("Payment order not found..!"));
	}
	@Override
	public PaymentOrder getPaymentOrderByPaymentId(String orderId) throws Exception {
		PaymentOrder order= paymentOrderRepository.findByPaymentlinkId(orderId);
		if(order==null) {
			throw new Exception("payement order not found with paymentlink id ");
		}
		return order;
	}
//	@Override
//	public Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId, String paymentLinkId)
//			throws Exception {
//		
//		if(paymentOrder.getStaus().equals(PaymentOrderStatus.PENDING)) {
//			RazorpayClient razorpayClient =new RazorpayClient(apiKey, apiSecret);
//			Payment payment = razorpayClient.payments.fetch(paymentId);
//			
//			String status =payment.get("status");
//			if(status.equals("captured")) {
//				Set<Order> orders = paymentOrder.getOrders();
//				for(Order order:orders) {
//					order.setPaymentStatus(PaymentStatus.COMPLETED);
//					orderRepository.save(order);
//				}
//				paymentOrder.setStaus(PaymentOrderStatus.SUCCESS);
//				paymentOrderRepository.save(paymentOrder);
//				return true;
//			}
//			paymentOrder.setStaus(PaymentOrderStatus.FAILED);
//			paymentOrderRepository.save(paymentOrder);
//			return false;
//		}
//		return false;
//	}
	
	@Override
	public Boolean proceedPaymentOrder(PaymentOrder paymentOrder, 
	                                   String paymentId, 
	                                   String paymentLinkId,
	                                   PaymentMethod paymentMethod) // Enum
	        throws Exception {

	    if(!paymentOrder.getStaus().equals(PaymentOrderStatus.PENDING)) {
	        return false;
	    }

	    boolean paymentSuccess = false;

	    // ===== Razorpay =====
	    if(paymentMethod == PaymentMethod.RAZORPAY) {
	        RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);
	        Payment payment = razorpayClient.payments.fetch(paymentId);
	        String status = payment.get("status");
	        paymentSuccess = status.equals("captured");
	    }

	    // ===== Stripe =====
	    else if(paymentMethod == PaymentMethod.STRIPE) {
	        Stripe.apiKey = stripeApiKey;
	        PaymentIntent paymentIntent = PaymentIntent.retrieve(paymentId);
	        String status = paymentIntent.getStatus(); // "succeeded", "requires_payment_method", etc.
	        paymentSuccess = status.equals("succeeded");
	    }

	    // ===== Update PaymentOrder & Orders =====
	    if(paymentSuccess) {
	        Set<Order> orders = paymentOrder.getOrders();
	        for(Order order : orders) {
	            order.setPaymentStatus(PaymentStatus.COMPLETED);
	            orderRepository.save(order);
	        }
	        paymentOrder.setStaus(PaymentOrderStatus.SUCCESS);
	        paymentOrderRepository.save(paymentOrder);
	        return true;
	    } else {
	        paymentOrder.setStaus(PaymentOrderStatus.FAILED);
	        paymentOrderRepository.save(paymentOrder);
	        return false;
	    }
	}

	@Override
	public PaymentLink createrazorPayPaymentLink(User user, Long amount, Long orderId) throws Exception {
		amount = amount*100;
		try {
			RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

			String secret = "EnLs21M47BllR3X8PSFtjtbd";

			JSONObject options = new JSONObject();
			options.put("amount", amount);
			options.put("currency", "INR");
			
			JSONObject customer = new JSONObject();
			customer.put("name", user.getFullName());
			customer.put("email", user.getEmail());
			options.put("customer", customer);
			
			JSONObject notify = new JSONObject();
			notify.put("email", true);
			options.put("notify", notify);
			
			options.put("callBack_url", "http://localhost:3000/paynemt-success/"+orderId);
			options.put("callback_Method", "get");
			
			PaymentLink paymentLink =razorpay.paymentLink.create(options);
			
			String paymentLinkUrl = paymentLink.get("short_url");
			String paymentLinkId = paymentLink.get("id");
			
			return paymentLink;
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new RazorpayException(e.getMessage());
		}
	}
	@Override
	public String createStripePaymentLink(User user, Long amount, Long orderId) throws Exception {
		Stripe.apiKey = stripeSecretKey;
		
		SessionCreateParams param = SessionCreateParams.builder();
		return null;
	}
	
	

}
