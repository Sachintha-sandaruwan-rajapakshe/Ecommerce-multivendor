package com.sachi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.User;
import com.sachi.Service.UserService;

import lombok.RequiredArgsConstructor;
@RestController
@RequiredArgsConstructor
@RequestMapping()
public class UserController {
	
	private final UserService userService;
	
	@GetMapping("/users/profile")
	public ResponseEntity<User> getUserHandler(@RequestHeader("Authorization") String jwt)throws Exception{
		User user =userService.findUserByJwtToken(jwt);
		
		return new ResponseEntity<>(user,HttpStatus.OK);
	}

}
