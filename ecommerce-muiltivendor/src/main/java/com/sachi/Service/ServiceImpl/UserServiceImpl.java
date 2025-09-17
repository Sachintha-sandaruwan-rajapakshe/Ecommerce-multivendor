package com.sachi.Service.ServiceImpl;

import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import com.sachi.Service.UserService;
@Service
public class UserServiceImpl implements UserService{

	@Override
	public User findUserByJwtToken(String jwt) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User findUserByEmail(String email) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
