package com.sachi.Service.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sachi.Model.Product;
import com.sachi.Model.Review;
import com.sachi.Model.User;
import com.sachi.Repository.ReviewRepository;
import com.sachi.Request.CreateReviewRequest;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements com.sachi.Service.ReviewService {
	
	private final ReviewRepository reviewRepository;

	@Override
	public Review createReview(CreateReviewRequest req, User user, Product product) {
		Review review = new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setProductImages(req.getProductImages());
		review.setRating(req.getRating());
		review.setReviewText(req.getReviewText());
		
		product.getReviews().add(review);
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getReviewByProductId(Long productId) {
		
		return reviewRepository.findByProductId(productId);
	}

	@Override
	public Review updateReview(Long reviewId, String reviewText, double rating, Long userId) throws Exception {

	    Review review = getReviewById(reviewId);

	    if (!review.getUser().getId().equals(userId)) {
	        throw new Exception("You can't update this review.");
	    }

	    if (reviewText != null && !reviewText.trim().isEmpty()) {
	        review.setReviewText(reviewText);
	    }

	    if (rating >= 1 && rating <= 5) {
	        review.setRating(rating);
	    }

	    return reviewRepository.save(review);
	}

	@Override
	public void deleteReview(Long reviewId, Long userId) throws Exception {
		Review review = getReviewById(reviewId);
		if(!review.getUser().getId().equals(userId)) {
			throw new Exception("you can't delete this review.");
		}
		reviewRepository.delete(review);
	}

	@Override
	public Review getReviewById(Long reviewId) throws Exception {
		return reviewRepository.findById(reviewId).orElseThrow(()->new Exception("review not found"));
	}



}
