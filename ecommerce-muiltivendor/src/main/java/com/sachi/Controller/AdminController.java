package com.sachi.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Domain.AccountStatus;
import com.sachi.Model.Seller;
import com.sachi.Service.SellerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AdminController {
	
	private final SellerService sellerService;

	@PatchMapping("/seller/{id}/status/{status}")
	public ResponseEntity<Seller> updateSellerStatus(@PathVariable Long id,@PathVariable AccountStatus status) throws Exception{
		Seller seller =sellerService.updateSellerAccountStatus(id, status);
		return ResponseEntity.ok(seller);
	}
}
