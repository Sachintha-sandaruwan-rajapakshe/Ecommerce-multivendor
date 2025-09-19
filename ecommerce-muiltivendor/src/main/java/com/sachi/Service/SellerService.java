package com.sachi.Service;

import java.util.List;

import com.sachi.Domain.AccountStatus;
import com.sachi.Model.Seller;

public interface SellerService {
	Seller getSellerProfile(String jwt)throws Exception;
	Seller createSeller(Seller seller)throws Exception;
	Seller getSellerbyId(Long id)throws Exception;
	Seller getSellerByEmail(String email)throws Exception;
	List<Seller> getAllSellers(AccountStatus status)throws Exception;
	Seller updateSeller(Long id,Seller seller)throws Exception;
	Seller deleteSeller(Long id)throws Exception;
	Seller verifyEmail(String email,String otp)throws Exception;
	Seller updateSellerAccountStatus(Long id,AccountStatus status)throws Exception;
	
	
}
