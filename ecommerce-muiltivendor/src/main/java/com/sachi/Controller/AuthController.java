package com.sachi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.User;
import com.sachi.Repository.UserRepository;
import com.sachi.Request.SignupRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private UserRepository userRepository;
	@PostMapping("/signup")
	public ResponseEntity<User>createUserHandler(@RequestBody SignupRequest req){
		User user = new User();
		user.setEmail(req.getEmail());
		user.setFullName(req.getFullName());
		User saveUser= userRepository.save(user);
		return new ResponseEntity<>(saveUser,HttpStatus.OK);
	}
}
