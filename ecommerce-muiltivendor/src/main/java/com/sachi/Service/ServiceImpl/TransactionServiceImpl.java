package com.sachi.Service.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Order;
import com.sachi.Model.Seller;
import com.sachi.Model.Transaction;
import com.sachi.Repository.SellerRepository;
import com.sachi.Repository.TransactionRepository;
import com.sachi.Service.SellerService;
import com.sachi.Service.TransactionService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {
	
	private final TransactionRepository transactionRepository;
	private final SellerService sellerService;

	@Override
	public Transaction createTransaction(Order order) throws SellerException {
		
		Seller seller = sellerService.getSellerbyId(order.getSellerId());
		
		Transaction transaction = new Transaction();
		transaction.setSeller(seller);
		transaction.setUser(order.getUser());
		transaction.setOrder(order);
		
		return transactionRepository.save(transaction) ;
	}

	@Override
	public List<Transaction> getTransactionBySellerId(Seller seller) throws Exception {

		List<Transaction> transactions =transactionRepository.findBySellerId(seller.getId());

		if (transactions.isEmpty()) {
		    throw new Exception("No transactions found for seller");
		}
		
		return transactions;
	}

	@Override
	public List<Transaction> getAllTransaction() throws Exception {
		List<Transaction> transactions =transactionRepository.findAll();

		if (transactions.isEmpty()) {
		    throw new Exception("No transactions found for seller");
		}
		
		return transactions;
	}
	

}
