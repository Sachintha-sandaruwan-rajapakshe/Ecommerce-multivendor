package com.sachi.Service;

import java.util.List;

import com.sachi.Exceptions.SellerException;
import com.sachi.Model.Order;
import com.sachi.Model.Seller;
import com.sachi.Model.Transaction;

public interface TransactionService {
	
	Transaction createTransaction(Order order)throws SellerException;
	List<Transaction> getTransactionBySellerId(Seller seller)throws SellerException, Exception;
	List<Transaction> getAllTransaction() throws Exception;

}
