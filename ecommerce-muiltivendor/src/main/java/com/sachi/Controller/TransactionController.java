package com.sachi.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Seller;
import com.sachi.Model.Transaction;
import com.sachi.Service.SellerService;
import com.sachi.Service.TransactionService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/transactions")
@RequiredArgsConstructor
public class TransactionController {
	
	private final TransactionService transactionService;
	private final SellerService sellerService;
	
	@GetMapping("/seller")
	public ResponseEntity<List<Transaction>> getTransactionBySeller(@RequestHeader("Authorization")String jwt) throws Exception{
		Seller seller = sellerService.getSellerProfile(jwt);
		List<Transaction> transactions = transactionService.getTransactionBySellerId(seller);
	
		return ResponseEntity.ok(transactions);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Transaction>> getAllTransaction() throws Exception{
		
		List<Transaction> transactions = transactionService.getAllTransaction();
	
		return ResponseEntity.ok(transactions);
	}

}
