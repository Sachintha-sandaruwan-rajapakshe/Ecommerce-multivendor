package com.sachi.Response;

import lombok.Data;

@Data
public class LoginRequest {
	private String email;
	private String otp;
}
