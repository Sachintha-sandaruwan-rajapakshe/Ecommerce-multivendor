package com.sachi.Service;

import com.sachi.Model.CartItem;

public interface CartItemService {
	
	CartItem updateCartItem(Long userId ,Long id,CartItem cartItem)throws Exception;
	CartItem removeCartItem(Long userid,Long cartItemId)throws Exception;
	CartItem findCartItemById(Long id)throws Exception;
}
