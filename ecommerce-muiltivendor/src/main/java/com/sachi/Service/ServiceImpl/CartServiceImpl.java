package com.sachi.Service.ServiceImpl;

import java.util.Iterator;

import org.springframework.stereotype.Service;

import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Product;
import com.sachi.Model.User;
import com.sachi.Repository.CartItemRepository;
import com.sachi.Repository.CartRepository;
import com.sachi.Service.CartService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{

	private final CartItemRepository cartItemRepository;
	private final CartRepository cartRepository;
	
	@Override
	public CartItem addCartitem(User user, Product product, String size, int quantity) {

	    Cart cart = this.findUserCart(user);

	    CartItem isPresent = cartItemRepository
	            .findByCartAndProductAndSize(cart, product, size);

	    if (isPresent != null) {
	        // If same product+size already in cart → increase qty
	        int newQty = isPresent.getQuantity() + quantity;
	        isPresent.setQuantity(newQty);

	        int newSell = newQty * product.getSellingPrice();
	        int newMrp = newQty * product.getMrpPrice();

	        isPresent.setSellingPrice(newSell);
	        isPresent.setMrpPrice(newMrp);

	        return cartItemRepository.save(isPresent);
	    }

	    // New item
	    CartItem cartItem = new CartItem();
	    cartItem.setCart(cart);
	    cartItem.setProduct(product);
	    cartItem.setQuantity(quantity);
	    cartItem.setSize(size);
	    cartItem.setUserId(user.getId());

	    cartItem.setMrpPrice(quantity * product.getMrpPrice());
	    cartItem.setSellingPrice(quantity * product.getSellingPrice());

	    return cartItemRepository.save(cartItem);
	}


	@Override
	public Cart findUserCart(User user) {

	    if (user == null || user.getId() == null)
	        throw new RuntimeException("Invalid user");

	    Cart cart = cartRepository.findByUserId(user.getId());

	    if (cart == null) {
	        cart = new Cart();
	        cart.setUser(user);
	        cart.setTotalItem(0);
	        cart.setTotalMrpPrice(0);
	        cart.setTotalSellingPrice(0);
	        cart.setDiscount(0);
	        cart = cartRepository.save(cart);
	    }

	    int totalMrp = 0, totalSell = 0, totalQty = 0;

	    for (CartItem item : cart.getCartItems()) {
	        int qty = item.getQuantity();
	        totalQty += qty;
	        totalMrp += item.getMrpPrice();
	        totalSell += item.getSellingPrice();
	    }

	    cart.setTotalItem(totalQty);
	    cart.setTotalMrpPrice(totalMrp);
	    cart.setTotalSellingPrice(totalSell);
	    cart.setDiscount(calculateDiscountPercentage(totalMrp, totalSell));

	    return cartRepository.save(cart);
	}

	
	private int calculateDiscountPercentage(int totalMrp, int totalSell) {
	    if (totalMrp <= 0) return 0;
	    return (int) Math.round(((totalMrp - totalSell) * 100.0) / totalMrp);
	}



}
