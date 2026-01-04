package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long>{

	CartItem findByCartAndProductAndSize(Cart cart,Product product,String size);
}
