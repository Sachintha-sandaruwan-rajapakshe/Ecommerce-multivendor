package com.sachi.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.USER_ROLE;
import com.sachi.Model.VerificationCode;
import com.sachi.Repository.VerificationCodeRepository;
import com.sachi.Request.LoginOtpRequest;
import com.sachi.Request.LoginRequest;
import com.sachi.Response.ApiResponse;
import com.sachi.Response.AuthResponse;
import com.sachi.Service.AuthService;
import com.sachi.Service.SellerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/sellers")
@RequiredArgsConstructor
public class SellerController {
	private final SellerService sellerService;
	private final VerificationCodeRepository verificationCodeRepository;
	private final AuthService authService;
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> loginSeller(@RequestBody LoginRequest req )throws Exception{
		String email =req.getEmail();
		String otp =req.getOtp();
		
//		VerificationCode verificationCode=  verificationCodeRepository.findByEmail(email);
//		if(verificationCode==null || !verificationCode.getOtp().equals(otp)) {
//			throw new Exception("Wrong otp code,try again ...!");
//		}
		req.setEmail("seller_"+email);
		AuthResponse authResponse =authService.signing(req);
		
		
		return new ResponseEntity<>(authResponse,HttpStatus.OK);
	}
	
//	@PostMapping("/sent/login-signup-otp")
//	public ResponseEntity<ApiResponse>sentOtpHandler(@RequestBody LoginOtpRequest req) throws Exception{
//		authService.sentLoginOtp(req.getEmail(), req.getRole());
//		ApiResponse apiResponse =new  ApiResponse();
//		apiResponse.setMessange("Otp sent successful");
//		return new  ResponseEntity<>(apiResponse,HttpStatus.OK);
//	}
//	
	
	
	
}
