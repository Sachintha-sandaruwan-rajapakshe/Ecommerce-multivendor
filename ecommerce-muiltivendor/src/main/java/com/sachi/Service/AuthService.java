package com.sachi.Service;

import com.sachi.Domain.USER_ROLE;
import com.sachi.Request.LoginRequest;
import com.sachi.Request.SignupRequest;
import com.sachi.Response.AuthResponse;

public interface AuthService {
	
	void sentLoginOtp(String email,USER_ROLE role)throws Exception;
	String careateUser(SignupRequest req)throws Exception;
	AuthResponse signing(LoginRequest req)throws Exception;
}
