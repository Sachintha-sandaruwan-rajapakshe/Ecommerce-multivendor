package com.sachi.Service;

import java.util.List;

import com.sachi.Model.Cart;
import com.sachi.Model.Coupon;
import com.sachi.Model.User;

public interface CouponService {
	
	Cart applyCoupon(String code , double ordervalue , User user) throws Exception;
	Cart removeCoupon(String code ,User user);
	Coupon findByCouponId(Long id);
	Coupon createCoupon(Coupon coupon);
	List<Coupon> findAllCoupon();
	void deleteCoupon(Long id);

}
