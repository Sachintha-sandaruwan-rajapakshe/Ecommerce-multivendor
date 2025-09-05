package com.sachi.Model;

import com.sachi.Domain.PaymentStatus;

import lombok.Data;

@Data
public class PaymentDetails {
	private String paymentId;
	private String razorpayPaymentLinkId;
	private String razorpayPaymentLinkReferanceId;
	private String razorpayPaymentLinkStatus;
	private String razorpayPaymentId;
	private PaymentStatus status;

}
