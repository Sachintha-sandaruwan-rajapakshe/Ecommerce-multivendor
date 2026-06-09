package com.sachi.Request;

import java.util.List;

import lombok.Data;

@Data
public class CreateReviewRequest {
	
	private String reviewText;
	private double rating;
	private List<String>productImages;
}
