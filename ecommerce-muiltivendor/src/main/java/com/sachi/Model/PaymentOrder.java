package com.sachi.Model;

import java.util.HashSet;
import java.util.Set;

import com.sachi.Domain.PaymentMethod;
import com.sachi.Domain.PaymentOrderStatus;
import com.sachi.Domain.PaymentStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class PaymentOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private Long amout;
	
	private PaymentOrderStatus staus =PaymentOrderStatus.PENDING;
	
	private PaymentMethod paymentMethod;
	
	private String paymentlinkId;
	
	@ManyToOne
	private User user;
	
	@OneToMany
	private Set<Order> orders = new HashSet<>();

}
