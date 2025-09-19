package com.sachi.Request;


import com.sachi.Domain.USER_ROLE;

import lombok.Data;

@Data
public class LoginOtpRequest {
	private String email;
	private String otp;
	private USER_ROLE role;

}