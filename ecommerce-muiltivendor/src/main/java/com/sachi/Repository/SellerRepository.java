package com.sachi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Domain.AccountStatus;
import com.sachi.Model.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{
	Seller findByEmail(String email);
	List<Seller> findByAccountStatus(AccountStatus status);
}
