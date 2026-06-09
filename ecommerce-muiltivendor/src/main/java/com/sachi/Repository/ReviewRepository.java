package com.sachi.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long>{
	
	List<Review> findByProductId(Long productId);

}
