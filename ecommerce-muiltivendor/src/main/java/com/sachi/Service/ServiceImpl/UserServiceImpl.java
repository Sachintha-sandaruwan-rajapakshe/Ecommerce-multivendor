package com.sachi.Service.ServiceImpl;


import org.springframework.stereotype.Service;

import com.sachi.Configuration.JwtProvider;
import com.sachi.Model.User;
import com.sachi.Repository.UserRepository;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
	private final UserRepository userRepository;
	private  final JwtProvider jwtProvider;
	
	@Override
	public User findUserByJwtToken(String jwt) throws Exception {
		String email =jwtProvider.getEmailFromJwtToken(jwt);
		User user = this.findUserByEmail(email);
		
		return user;
	}

	@Override
	public User findUserByEmail(String email) throws Exception {
		User user =userRepository.findByEmail(email);
		if(user==null) {
			throw new Exception("User not found with email..! :-"+email);
		}
		return user;
	}

	

}
