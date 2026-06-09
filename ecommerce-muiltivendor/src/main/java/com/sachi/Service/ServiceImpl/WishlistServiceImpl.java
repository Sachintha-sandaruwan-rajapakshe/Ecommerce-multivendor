package com.sachi.Service.ServiceImpl;

import org.springframework.stereotype.Service;

import com.sachi.Model.Product;
import com.sachi.Model.User;
import com.sachi.Model.WishList;
import com.sachi.Repository.WishlistRepository;
import com.sachi.Service.UserService;
import com.sachi.Service.WishlistService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService{
	
	private final WishlistRepository wishlistRepository;
	private final UserService userService;

	@Override
	public WishList createWishlist(User user) {
		WishList wishlist = new WishList();
		wishlist.setUser(user);
		
		return wishlistRepository.save(wishlist);
	}

	@Override
	public WishList getWishlistByuserId(User user) {
		
		WishList wishlist =  wishlistRepository.findByUserId(user.getId());
		
		if(wishlist==null) {
			wishlist = createWishlist(user);
		}
		return wishlistRepository.save(wishlist);
	}

	@Override
	public WishList addProductToWishlist(User user, Product product) {
		WishList wishlist =  wishlistRepository.findByUserId(user.getId());
		
		if(wishlist.getProducts().contains(product)) {
			wishlist.getProducts().remove(product);
		}
		else {
		
		wishlist.getProducts().add(product);
		}
		return wishlistRepository.save(wishlist);
	}

}
