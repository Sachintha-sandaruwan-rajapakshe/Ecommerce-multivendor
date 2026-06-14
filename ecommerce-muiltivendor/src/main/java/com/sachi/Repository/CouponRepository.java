package com.sachi.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Coupon;
import java.util.List;


@Repository
public interface CouponRepository extends JpaRepository<Coupon, Long>{
	Coupon  findByCode(String code);

}
