package com.sachi.Service;

import java.util.List;

import com.sachi.Model.Cart;
import com.sachi.Model.Coupon;
import com.sachi.Model.User;

public interface CouponService {
	
	Cart applyCoupon(String code , double ordervalue , User user) throws Exception;
	Cart removeCoupon(String code ,User user) throws Exception;
	Coupon findByCouponId(Long id) throws Exception;
	Coupon createCoupon(Coupon coupon);
	List<Coupon> findAllCoupon();
	void deleteCoupon(Long id) throws Exception;

}
