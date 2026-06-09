package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.WishList;

@Repository
public interface WishlistRepository extends JpaRepository<WishList, Long>{

	WishList findByUserId(Long id);
}
