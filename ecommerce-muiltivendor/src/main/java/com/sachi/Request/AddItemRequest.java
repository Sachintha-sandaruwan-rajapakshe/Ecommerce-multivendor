package com.sachi.Request;

import lombok.Data;

@Data
public class AddItemRequest {
	private String size;
	private int quantity;
	private Long productId;
	
}
