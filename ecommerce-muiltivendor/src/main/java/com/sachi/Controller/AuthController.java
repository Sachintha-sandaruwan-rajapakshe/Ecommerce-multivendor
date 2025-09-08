package com.sachi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.User;
import com.sachi.Request.SignupRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@PostMapping("/signup")
	public ResponseEntity<User>createUserHandler(@RequestBody SignupRequest req){
		User user = new User();
		user.setEmail(req.getEmail());
		user.setFullName(req.getFullName());
		return new ResponseEntity<>(user,HttpStatus.OK);
	}
}
