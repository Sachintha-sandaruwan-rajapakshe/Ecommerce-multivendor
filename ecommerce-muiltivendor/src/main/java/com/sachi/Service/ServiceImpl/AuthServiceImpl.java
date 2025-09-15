package com.sachi.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sachi.Configuration.JwtProvider;
import com.sachi.Domain.USER_ROLE;
import com.sachi.Model.Cart;
import com.sachi.Model.User;
import com.sachi.Model.VerificationCode;
import com.sachi.Repository.CartRepository;
import com.sachi.Repository.UserRepository;
import com.sachi.Repository.VerificationCodeRepository;
import com.sachi.Request.SignupRequest;
import com.sachi.Service.AuthService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

	
	private final UserRepository userRepository ;
	
	private final PasswordEncoder passwordEncoder ;
	
	private final CartRepository cartRepository ;
	
	private final JwtProvider jwtProvider;
	
	private final VerificationCodeRepository verificationCodeRepository;
	
	@Override
	public String careateUser(SignupRequest req) throws Exception {
		
		
		VerificationCode verificationCode =verificationCodeRepository.findByEmail(req.getEmail());
		if(verificationCode == null) {
			throw new Exception("Wrong OTP code...!");
		};
		
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

}
