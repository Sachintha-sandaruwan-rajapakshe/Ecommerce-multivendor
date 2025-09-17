package com.sachi.Service;

import com.sachi.Request.SignupRequest;
import com.sachi.Response.AuthResponse;
import com.sachi.Response.LoginRequest;

public interface AuthService {
	
	void sentLoginOtp(String email)throws Exception;
	String careateUser(SignupRequest req)throws Exception;
	AuthResponse signing(LoginRequest req)throws Exception;
}
