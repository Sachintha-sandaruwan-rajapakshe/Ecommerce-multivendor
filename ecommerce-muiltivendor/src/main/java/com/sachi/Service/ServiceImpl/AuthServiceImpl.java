package com.sachi.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sachi.Configuration.JwtProvider;
import com.sachi.Domain.USER_ROLE;
import com.sachi.Model.Cart;
import com.sachi.Model.Seller;
import com.sachi.Model.User;
import com.sachi.Model.VerificationCode;
import com.sachi.Repository.CartRepository;
import com.sachi.Repository.SellerRepository;
import com.sachi.Repository.UserRepository;
import com.sachi.Repository.VerificationCodeRepository;
import com.sachi.Request.LoginRequest;
import com.sachi.Request.SignupRequest;
import com.sachi.Response.AuthResponse;
import com.sachi.Service.AuthService;
import com.sachi.Service.EmailService;
import com.sachi.Utils.OtpUtil;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	
	private final UserRepository userRepository ;
	
	private final PasswordEncoder passwordEncoder ;
	
	private final CartRepository cartRepository ;
	
	private final JwtProvider jwtProvider;
	
	private final VerificationCodeRepository verificationCodeRepository;
	
	private final EmailService emailService;
	
	private final CustomServiceImpl customServiceImpl;
	
	private final SellerRepository sellerRepository;
	
	
	@Override
	public String careateUser(SignupRequest req) throws Exception {
		
//		VerificationCode verificationCode =verificationCodeRepository.findByEmail(req.getEmail());
//		
//		if(verificationCode == null || !verificationCode.getOtp().equals(req.getOtp())) {
//			throw new Exception("Wrong OTP code...!");
//		};
		
		User user = userRepository.findByEmail(req.getEmail());
;		if(user== null) {
	
			User createUser =new User();
			
			createUser.setEmail(req.getEmail());
			createUser.setFullName(req.getFullName());
			createUser.setMobile("0712446924");
			createUser.setPassword(passwordEncoder.encode(req.getOtp()));
			createUser.setRole(USER_ROLE.ROLE_CUSTOMER);
			
			user=userRepository.save(createUser);
			
			Cart cart =new Cart();
			cart.setUser(user);
			cartRepository.save(cart);
			
			List<GrantedAuthority> authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority(USER_ROLE.ROLE_CUSTOMER.toString()));
			
			Authentication authentication = new UsernamePasswordAuthenticationToken(req.getEmail(), null,authorities);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			return jwtProvider.generateToken(authentication);
		}else {
			throw new  Exception("Already have account ");
		}


		
	}

	@Override
	public void sentLoginOtp(String email,USER_ROLE role) throws Exception {
		String SIGNING_PREFIX ="signing_";
		
		if(email.startsWith(SIGNING_PREFIX)) {
			email=email.substring(SIGNING_PREFIX.length());
			
			if(role.equals(USER_ROLE.ROLE_SELLER)) {
				Seller seller =sellerRepository.findByEmail(email);
				if(seller==null) {
					throw new Exception("Seller not exist with provided email..!");
				}
				
			}else {
				User user =userRepository.findByEmail(email);
				if(user==null) {
					throw new Exception("User not exist with provided email..!");
				}
			}
			
		}
		
		VerificationCode isExist = verificationCodeRepository.findByEmail(email);
		if(isExist!=null) {
			verificationCodeRepository.delete(isExist);
		}
		String otp =OtpUtil.generateOtp();
		VerificationCode verificationCode = new VerificationCode();
		verificationCode.setOtp(otp);
		verificationCode.setEmail(email);
		
		verificationCodeRepository.save(verificationCode);
		
		
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
		
	}

	@Override
	public AuthResponse signing(LoginRequest req) throws Exception {
		String username =req.getEmail();
		String otp = req.getOtp();
		
		Authentication authentication = authenticate(username,otp);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token =jwtProvider.generateToken(authentication);
		
		AuthResponse authResponse =new AuthResponse();
		authResponse.setMessange("Login Success..!");
		authResponse.setJwt(token);
		
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
		String roleName = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();
		
		authResponse.setRole(USER_ROLE.valueOf(roleName));
		
		return authResponse;
	}

	private Authentication authenticate(String username, String otp) {
		UserDetails userDetails = customServiceImpl.loadUserByUsername(username);
		
		String SELLER_PREFIX="seller_";
		if(username.startsWith(SELLER_PREFIX)) {
			String acrualName =username.substring(SELLER_PREFIX.length());
			username=acrualName;
			}
		if(userDetails==null ) {
			throw new BadCredentialsException("invalid username..."+username);
		}
		
		VerificationCode verificationCode =verificationCodeRepository.findByEmail(username);
		if(verificationCode==null || !verificationCode.getOtp().equals(otp)) {
			throw new BadCredentialsException("wrong otp code..");
		}
		
		return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
	}

	

	

}

















