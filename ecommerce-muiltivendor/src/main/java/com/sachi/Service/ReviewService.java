package com.sachi.Service;

import java.util.List;

import com.sachi.Model.Product;
import com.sachi.Model.Review;
import com.sachi.Model.User;
import com.sachi.Request.CreateReviewRequest;

public interface ReviewService {
	
	Review createReview(CreateReviewRequest req, User user,Product product);
	List<Review>getReviewByProductId(Long productId);
	Review updateReview(Long productId,String reviewText,double rating) throws Exception;
	void deleteReview(Long reviewId ,Long userId) throws Exception;
	Review getReviewById(Long reviewId) throws Exception;
	Review updateReview(Long reviewId, String reviewText, double rating,Long userId) throws Exception;

}
