package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sachi.Model.Product;
import com.sachi.Model.Review;
import com.sachi.Model.User;
import com.sachi.Request.CreateReviewRequest;
import com.sachi.Response.ApiResponse;
import com.sachi.Service.ProductService;
import com.sachi.Service.ReviewService;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/api")
@RequiredArgsConstructor

public class ReviewController {
	private final ReviewService reviewService;
	private final UserService userService;
	private final ProductService productService;
	
	@GetMapping("/products/{productId}/reviews")
	public ResponseEntity<List<Review>>getReviewsByProductId(@PathVariable Long productId){
		List<Review> reviews = reviewService.getReviewByProductId(productId);
		
		return ResponseEntity.ok(reviews);
	}
	
	@PostMapping("/products/{productId}/reviews")
	public ResponseEntity<Review>writeReview(@RequestBody CreateReviewRequest req,@PathVariable Long productId, @RequestHeader("Authorization")String jwt  ) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Product product = productService.findProductById(productId);
		Review review = reviewService.createReview(req, user, product);
		return new ResponseEntity<Review>(review,HttpStatus.CREATED);
	}
	
	
	@PatchMapping("/reviews/{reviewId}")
	public ResponseEntity<Review>updateReview(@RequestBody CreateReviewRequest req,@PathVariable Long reviewId, @RequestHeader("Authorization")String jwt  ) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		Review review = reviewService.updateReview(reviewId, req.getReviewText(), req.getRating(), user.getId());
		return new ResponseEntity<Review>(review,HttpStatus.CREATED);
	}
	
	public ResponseEntity<ApiResponse>deleteReview(@PathVariable Long reviewId,@RequestHeader("Authorization")String jwt ) throws Exception{
		User user = userService.findUserByJwtToken(jwt);
		ApiResponse apiResponse =new ApiResponse();
		reviewService.deleteReview(reviewId, user.getId());
		
		apiResponse.setMessange("review deleted successfull.");
		
		return ResponseEntity.ok(apiResponse);
		
	}
	

}
