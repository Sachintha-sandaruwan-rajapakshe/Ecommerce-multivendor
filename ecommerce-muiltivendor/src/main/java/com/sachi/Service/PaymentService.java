package com.sachi.Service;

import java.util.Set;

import com.razorpay.PaymentLink;
import com.sachi.Model.Order;
import com.sachi.Model.PaymentOrder;
import com.sachi.Model.User;
import com.sachi.Service.ServiceImpl.PaymentMethod;

public interface PaymentService {

	PaymentOrder createPaymentOrder(User user,Set<Order> orders)throws Exception;
	PaymentOrder getPaymentOrderById(Long orderId)throws Exception;
	PaymentOrder getPaymentOrderByPaymentId(String orderId)throws Exception;
	Boolean proceedPaymentOrder(PaymentOrder paymentOrder,String paymentId, String paymentLinkId,com.sachi.Domain.PaymentMethod paymentMethod)throws Exception;
	PaymentLink createrazorPayPaymentLink(User user, Long amount, Long orderId)throws Exception;
	String createStripePaymentLink(User user, Long amount, Long orderId)throws Exception;
}
