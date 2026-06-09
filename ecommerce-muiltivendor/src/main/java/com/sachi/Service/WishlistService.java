package com.sachi.Service;

import com.sachi.Model.Product;
import com.sachi.Model.User;
import com.sachi.Model.WishList;

public interface WishlistService {
	
	WishList createWishlist(User user);
	WishList getWishlistByuserId(User user);
	WishList addProductToWishlist(User user,Product product);

}
