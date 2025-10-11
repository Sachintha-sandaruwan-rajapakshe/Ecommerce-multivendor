package com.sachi.Service.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sachi.Configuration.JwtProvider;
import com.sachi.Domain.AccountStatus;
import com.sachi.Domain.USER_ROLE;
import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Address;
import com.sachi.Model.Seller;
import com.sachi.Repository.AddressRepository;
import com.sachi.Repository.SellerRepository;
import com.sachi.Service.SellerService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {
	private final SellerRepository sellerRepository;
	private final JwtProvider jwtProvider;
	private final PasswordEncoder passwordEncoder;
	private final AddressRepository addressRepository;
	@Override
	public Seller getSellerProfile(String jwt) throws SellerException {
		String email=jwtProvider.getEmailFromJwtToken(jwt);
		
		return this.getSellerByEmail(email);
	}

	@Override
	public Seller createSeller(Seller seller) throws Exception {
		Seller sellerExist =sellerRepository.findByEmail(seller.getEmail());
		if(sellerExist != null) {
			throw new Exception("Seller already exists. Please use another email.   "+sellerExist);
		}
		Address saveAddress =addressRepository.save(seller.getPickupAddress());
		
		Seller newSeller =new Seller();
		newSeller.setEmail(seller.getEmail());
		newSeller.setSellerName(seller.getSellerName());
		newSeller.setPickupAddress(saveAddress);
		newSeller.setPassword(passwordEncoder.encode(seller.getPassword()));
		newSeller.setGSTIN(seller.getGSTIN());
		newSeller.setBankDetails(seller.getBankDetails());
		newSeller.setBusinessDtails(seller.getBusinessDtails());
		newSeller.setMobile(seller.getMobile());
		newSeller.setRole(USER_ROLE.ROLE_SELLER);
		
		return sellerRepository.save(newSeller);
		
	}

	@Override
	public Seller getSellerbyId(Long id) throws SellerException {
		return sellerRepository.findById(id).orElseThrow(()->new SellerException("Seller not found with id "+id)) ;
	}

	@Override
	public Seller getSellerByEmail(String email) throws SellerException {
		Seller seller = sellerRepository.findByEmail(email);
		if(seller==null) {
			throw new SellerException("Seller not found with email..! :- "+email);
		}
		return seller;
	}

	@Override
	public List<Seller> getAllSellers(AccountStatus status) throws Exception {
		return sellerRepository.findByAccountStatus(status);
	}

	@Override
	public Seller updateSeller(Long id, Seller seller) throws Exception {
		Seller sellerExist =this.getSellerbyId(id);
		
		if(seller.getSellerName() != null) {
			sellerExist.setSellerName(seller.getSellerName());
		}
		if(seller.getEmail() != null) {
			sellerExist.setEmail(seller.getEmail());
		}
		if (seller.getPickupAddress() != null) {
		    if (seller.getPickupAddress().getAddress() != null) {
		        sellerExist.getPickupAddress().setAddress(seller.getPickupAddress().getAddress());
		    }
		    if (seller.getPickupAddress().getCity() != null) {
		        sellerExist.getPickupAddress().setCity(seller.getPickupAddress().getCity());
		    }
		    if (seller.getPickupAddress().getLocality() != null) {
		        sellerExist.getPickupAddress().setLocality(seller.getPickupAddress().getLocality());
		    }
		    if (seller.getPickupAddress().getMobile() != null) {
		        sellerExist.getPickupAddress().setMobile(seller.getPickupAddress().getMobile());
		    }
		    if (seller.getPickupAddress().getName() != null) {
		        sellerExist.getPickupAddress().setName(seller.getPickupAddress().getName());
		    }
		    if (seller.getPickupAddress().getPinCode() != null) {
		        sellerExist.getPickupAddress().setPinCode(seller.getPickupAddress().getPinCode());
		    }
		    if (seller.getPickupAddress().getState() != null) {
		        sellerExist.getPickupAddress().setState(seller.getPickupAddress().getState());
		    }
		}

		if(seller.getGSTIN() != null) {
			sellerExist.setGSTIN(seller.getGSTIN());
		}
		if(seller.getBankDetails()!=null 
				&& seller.getBankDetails().getAccoutHolderName()!=null 
				&& seller.getBankDetails().getIfscCode()!=null
				&& seller.getBankDetails().getAccoutNumber()!=null){
			
			sellerExist.getBankDetails().setAccoutHolderName(seller.getBankDetails().getAccoutHolderName());
			sellerExist.getBankDetails().setIfscCode(seller.getBankDetails().getIfscCode());
			sellerExist.getBankDetails().setAccoutNumber(seller.getBankDetails().getAccoutNumber());
			
		}
		if(seller.getBusinessDtails()!=null && seller.getBusinessDtails().getBusinessName()!= null){
			sellerExist.getBusinessDtails().setBusinessName(seller.getBusinessDtails().getBusinessName());
		}
		if(seller.getMobile()!=null) {
			sellerExist.setMobile(seller.getMobile());
		}
		return sellerRepository.save(sellerExist);
	}

	@Override
	public Seller deleteSeller(Long id) throws Exception {
	    Optional<Seller> seller = sellerRepository.findById(id);

	    if (seller.isEmpty()) {
	        throw new Exception("Seller id not found: " + id);
	    }

	    Seller existingSeller = seller.get();
	    sellerRepository.delete(existingSeller);

	    return existingSeller;
	}


	@Override
	public Seller verifyEmail(String email, String otp) throws Exception {
		Seller seller=this.getSellerByEmail(email);
		seller.setIsEmailVerified(true);
		return sellerRepository.save(seller);
	}

	@Override
	public Seller updateSellerAccountStatus(Long id, AccountStatus status) throws Exception {
		Seller seller=this.getSellerbyId(id);
		seller.setAccountStatus(status);
		return sellerRepository.save(seller);
	}

}
