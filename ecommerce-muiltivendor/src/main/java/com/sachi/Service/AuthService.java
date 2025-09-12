package com.sachi.Service;

import com.sachi.Request.SignupRequest;

public interface AuthService {
	
	String careateUser(SignupRequest req)throws Exception;
}
