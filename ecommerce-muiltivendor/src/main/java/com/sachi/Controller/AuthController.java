package com.sachi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.USER_ROLE;
import com.sachi.Request.SignupRequest;
import com.sachi.Response.AuthResponse;
import com.sachi.Service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	
	private final AuthService authService;
	
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse>createUserHandler(@RequestBody SignupRequest req) throws Exception{
		String jwt =authService.careateUser(req);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(jwt);
		authResponse.setMessange("Register Successful.!");
		authResponse.setRole(USER_ROLE.ROLE_CUSTOMER);
		return new ResponseEntity<>(authResponse,HttpStatus.CREATED);
	}
}
