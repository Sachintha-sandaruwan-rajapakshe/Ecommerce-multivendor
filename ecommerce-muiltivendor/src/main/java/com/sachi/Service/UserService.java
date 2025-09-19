package com.sachi.Service;

import com.sachi.Model.User;

public interface UserService {
	public User findUserByJwtToken(String jwt)throws Exception;
	
	public User findUserByEmail(String email)throws Exception;
}
