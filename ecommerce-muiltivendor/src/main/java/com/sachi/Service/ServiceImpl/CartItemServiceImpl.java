package com.sachi.Service.ServiceImpl;


import org.springframework.stereotype.Service;

import com.sachi.Model.CartItem;
import com.sachi.Model.User;
import com.sachi.Repository.CartItemRepository;
import com.sachi.Service.CartItemService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class CartItemServiceImpl implements CartItemService {
	private final CartItemRepository cartItemRepository;
	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws Exception {
		CartItem item = this.findCartItemById(id);
		User cartItemUser = item.getCart().getUser();
		
		if (cartItemUser.getId().equals(userId)) {
			item.setQuantity(cartItem.getQuantity());
			item.setMrpPrice(item.getQuantity()*item.getProduct().getMrpPrice());
			item.setSellingPrice(item.getQuantity()*item.getProduct().getSellingPrice());
			return cartItemRepository.save(item);
		}
		throw new RuntimeException("You are not authorized to update this cart item");
	}

	@Override
	public CartItem removeCartItem(Long userid, Long cartItemId) throws Exception {
		CartItem item = this.findCartItemById(cartItemId);
		User cartItemUser =item.getCart().getUser();
		
		if (cartItemUser.getId().equals(userid)) {
			CartItem deleteItem = item;
			cartItemRepository.delete(item);
			return deleteItem;
		}
		throw new RuntimeException("You are not authorized to delete this cart item");
	}

	@Override
	public CartItem findCartItemById(Long id) throws Exception {
	
		return cartItemRepository.findById(id).orElseThrow(()-> new Exception("cart item not found"+id));
	}

}
