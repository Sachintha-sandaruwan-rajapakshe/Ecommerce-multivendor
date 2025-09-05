package com.sachi.Model;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.sachi.Domain.USER_ROLE;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode   // duplicate data enter wenne na me annotation eken
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	
	private String email;
	
	private String fullName;
	
	private String mobile;
	
	private USER_ROLE role=USER_ROLE.ROLE_CUSTOMER;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Address> address = new HashSet<>();
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<Coupon> useCoupons = new HashSet<>(); //Set එක List එකට වෙනස් වීමේ කාරණය,ඔයා එකම Address එක duplicate වශයෙන් add කරන්න අවශ්‍ය නැති නම් Set use කරන්න.
	//List use කරලා තිබුනොත් duplicates allow කරනවා.

}
