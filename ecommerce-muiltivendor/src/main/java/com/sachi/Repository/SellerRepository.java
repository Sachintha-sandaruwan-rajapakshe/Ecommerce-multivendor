package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	Seller findByEmail(String email);
}
