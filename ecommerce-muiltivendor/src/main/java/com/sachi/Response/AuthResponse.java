package com.sachi.Response;

import com.sachi.Domain.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponse {
	private String jwt;
	private String messange;
	private String email;
	private USER_ROLE role;
}
