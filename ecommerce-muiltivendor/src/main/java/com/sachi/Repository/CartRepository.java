package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Cart;

public interface CartRepository  extends JpaRepository<Cart, Long>{
	
	Cart findByUserId(Long id);
}
