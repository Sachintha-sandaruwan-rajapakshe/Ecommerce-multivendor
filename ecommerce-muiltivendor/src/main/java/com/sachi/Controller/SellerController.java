package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.AccountStatus;
import com.sachi.Domain.USER_ROLE;
import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Seller;
import com.sachi.Model.SellerReport;
import com.sachi.Model.VerificationCode;
import com.sachi.Repository.VerificationCodeRepository;
import com.sachi.Request.LoginOtpRequest;
import com.sachi.Request.LoginRequest;
import com.sachi.Response.AuthResponse;
import com.sachi.Service.AuthService;
import com.sachi.Service.EmailService;
import com.sachi.Service.SellerReportService;
import com.sachi.Service.SellerService;
import com.sachi.Utils.OtpUtil;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/sellers")
@RequiredArgsConstructor
public class SellerController {
	private final SellerService sellerService;
	private final VerificationCodeRepository verificationCodeRepository;
	private final AuthService authService;
	private final EmailService emailService;
	private final SellerReportService sellerReportService;
	
	@PostMapping("/login")
	public ResponseEntity<AuthResponse> loginSeller(@RequestBody LoginRequest req )throws Exception{
		String email =req.getEmail();
		
		req.setEmail("seller_"+email);
		AuthResponse authResponse =authService.signing(req);
		
		
		return new ResponseEntity<>(authResponse,HttpStatus.OK);
	}
	
	@PatchMapping("/varify/{otp}")
	public ResponseEntity<Seller>verifySellerEmail(@PathVariable String otp)throws Exception{
		VerificationCode verificationCode = verificationCodeRepository.findByOtp(otp);
		
		if(verificationCode==null || !verificationCode.getOtp().equals(otp)) {
			throw new Exception("Wrong otp code ,please try again..! ");
		}
		Seller seller =sellerService.verifyEmail(verificationCode.getEmail(), otp);
		
		return new ResponseEntity<>(seller,HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<Seller> createSeller(@RequestBody Seller seller)throws Exception{
		Seller saveSeller = sellerService.createSeller(seller);
		String otp =OtpUtil.generateOtp();
		VerificationCode verificationCode = new VerificationCode();
		verificationCode.setEmail(saveSeller.getEmail());
		verificationCode.setOtp(otp);
		
		String email=saveSeller.getEmail();
		String subject ="Sachi login/signup otp";
		String text ="""
			    <div style="font-family: Arial, sans-serif; text-align: center;">
		        <h2 style="color: #4CAF50;">Your OTP Code</h2>
		        <p>Please use the following OTP to complete your verification:</p>
		        <h1 style="background:#f4f4f4; display:inline-block; padding:10px 20px; border-radius:5px;">
		            %s
		        </h1>
		        <p>This code will expire in <b>5 minutes</b>.</p>
		    </div>
		""".formatted(otp);
		
		 emailService.sendVerificationOtpEmail(email, otp, subject, text);
		 return new ResponseEntity<>(saveSeller,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Seller>getSellerById(@PathVariable Long id)throws SellerException{
		Seller seller =sellerService.getSellerbyId(id);
		return new ResponseEntity<>(seller,HttpStatus.OK);
	}
	
	@GetMapping("/profile")
	public ResponseEntity<Seller>getSellerByjwt(@RequestHeader("Authorization")String jwt)throws Exception{
		Seller seller =sellerService.getSellerProfile(jwt);
		return new ResponseEntity<>(seller,HttpStatus.OK);
	}
	
	@GetMapping("/report")
	public ResponseEntity<SellerReport>getSellerReport(@RequestHeader("Authorization")String jwt)throws Exception{
		Seller seller = sellerService.getSellerProfile(jwt);
		SellerReport  sellerReport = sellerReportService.getSellerReport(seller);
		return new ResponseEntity<SellerReport>(sellerReport,HttpStatus.OK);
	}
	
	@GetMapping()
	public ResponseEntity<List<Seller>>getAllSeller(@RequestParam(required = false) AccountStatus status)throws Exception{
		 List<Seller>  seller=sellerService.getAllSellers(status);
		return new ResponseEntity<>(seller,HttpStatus.OK);
	}
	
	@PatchMapping()
	public ResponseEntity<Seller>updateSeller(@RequestHeader("Authorization")String jwt , @RequestBody Seller seller)throws Exception{
		Seller profile = sellerService.getSellerProfile(jwt);
		Seller updateSeller =sellerService.updateSeller(profile.getId(), seller);
		return new ResponseEntity<>(updateSeller,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Seller>deleteSeller(@PathVariable Long id)throws Exception{
		Seller deleteSeller =sellerService.deleteSeller(id);
		return new ResponseEntity<>(deleteSeller,HttpStatus.OK);
	}
	
	
}
