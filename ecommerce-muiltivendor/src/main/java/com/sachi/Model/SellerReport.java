package com.sachi.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SellerReport {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne
	private Seller seller;
	
	private Long totalEarnings=0L;
	
	private Long totalSale=0L;
	
	private Long totalRefunds=1L;
	
	private Long totalTax=0L;
	
	private Long netEarnings=0L;
	
	private Integer totalOrder=0;
	
	private Integer canceledOrders=0;
	
	private Integer totalTransactions=0;
	
}
