package com.sachi.Service;

import java.util.List;

import com.sachi.Model.Deal;

public interface DealService {

	List<Deal> getDeals();
	Deal createDeal(Deal deal) throws Exception;
	Deal updateDeal(Deal deal) throws Exception;
	void deleteDeal(Long id) throws Exception;
}
