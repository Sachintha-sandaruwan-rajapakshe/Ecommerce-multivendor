package com.sachi.Service.ServiceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import com.sachi.Model.Cart;
import com.sachi.Model.Coupon;
import com.sachi.Model.User;
import com.sachi.Repository.CartRepository;
import com.sachi.Repository.CouponRepository;
import com.sachi.Repository.UserRepository;
import com.sachi.Service.CartService;
import com.sachi.Service.CouponService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class CouponServiceImpl implements CouponService {
	
	private final CouponRepository couponRepository;
	private final UserRepository userRepository;
	private final CartRepository cartRepository;
	
	@Override
	public Cart applyCoupon(String code, double ordervalue, User user) throws Exception {
		Coupon coupon = couponRepository.findByCode(code);
		Cart cart = cartRepository.findByUserId(user.getId());
		
		if(coupon==null) {
			throw new Exception("coupon not valid");
		}
		if(cart.getCouponCode().contains(code)&& cart.getCouponCode()!=null ){
			throw new Exception("Coupon already used");
		}
		if(ordervalue<coupon.getMinimumOrderValue()) {
			throw new Exception("coupon order value is less than minumum order value "+coupon.getMinimumOrderValue());
		}
		
		if(!coupon.isActive()|| LocalDate.now().isAfter(coupon.getValidityStartDate()) || LocalDate.now().isBefore(coupon.getValidityEndDate())) {
			throw new Exception("Coupon is expired");
		}
		
		user.getUseCoupons().add(coupon);
		userRepository.save(user);
		
		double discountedPrice = (cart.getTotalSellingPrice()*coupon.getDiscountPersentage())/100;
		cart.setTotalSellingPrice(cart.getTotalSellingPrice()-discountedPrice);
		
		cart.setCouponCode(code);
		cartRepository.save(cart);
		return cart;
	}

	@Override
	public Cart removeCoupon(String code, User user) throws Exception {
		Coupon coupon = couponRepository.findByCode(code);
		Cart cart = cartRepository.findByUserId(user.getId());
		
		if(coupon==null) {
			throw new Exception("coupon not valid");
		}
		if(cart.getCouponCode() != null && cart.getCouponCode().equals(code)){
			double originalPrice =
				    cart.getTotalSellingPrice() /
				    (1 - coupon.getDiscountPersentage() / 100.0);

				cart.setTotalSellingPrice(originalPrice);
			
			cart.setCouponCode(null);
			cartRepository.save(cart);
			return cart;
		}
		throw new  Exception("coupon not found");
	}

	@Override
	public Coupon findByCouponId(Long id) throws Exception {
		
		return couponRepository.findById(id).orElseThrow(()-> new Exception("coupon not found"));
	}

	@Override
	@PreAuthorize("hasRole('ADMIN')")
	public Coupon createCoupon(Coupon coupon) {
		
		return couponRepository.save(coupon);
	}

	@Override
	public List<Coupon> findAllCoupon() {
		// TODO Auto-generated method stub
		return couponRepository.findAll();
	}

	@Override
	@PreAuthorize("hasRole('ADMIN')")
	public void deleteCoupon(Long id) throws Exception {
		Coupon coupon = findByCouponId(id);
		if(coupon != null) {
			couponRepository.deleteById(coupon.getId());
		}
		throw new Exception("Coupon not found with id: " + id);
	}

}
