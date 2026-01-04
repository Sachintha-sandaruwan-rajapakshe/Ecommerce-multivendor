package com.sachi.Service;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Product;
import com.sachi.Model.User;

public interface CartService {
	
	public CartItem addCartitem(User user, Product product,String size,int quantity);
	public Cart findUserCart(User user);
}
