package com.sachi.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.sachi.Domain.AccountStatus;
import com.sachi.Domain.USER_ROLE;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Seller {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String sellerName;
	
	private String mobile;
	
	@Column(unique = true,nullable = false)
	private String email;
	
	@JsonProperty(access = Access.READ_WRITE)
	private String password;
	
	@Embedded
	private BusinessDetails businessDtails = new BusinessDetails();
	
	@Embedded
	private BankDetails bandDetails =new BankDetails();
	
	@OneToOne(cascade = CascadeType.ALL)
	private Address pickupAddress = new Address();
	
	private String GSTIN;
	
	private USER_ROLE role=USER_ROLE.ROLE_SELLER;
	
	private boolean IsEmailVerified=false;
	
	private AccountStatus accountStatus=AccountStatus.PENDING_VERIFICATION;
	
	
	
	
	
	
	
	
}
