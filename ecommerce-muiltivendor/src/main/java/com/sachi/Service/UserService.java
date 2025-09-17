package com.sachi.Service;

import org.springframework.security.core.userdetails.User;

public interface UserService {
	public User findUserByJwtToken(String jwt)throws Exception;
	
	public User findUserByEmail(String email)throws Exception;
}
