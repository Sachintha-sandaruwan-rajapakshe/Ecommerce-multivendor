package com.sachi.Service.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sachi.Model.Deal;
import com.sachi.Model.HomeCategory;
import com.sachi.Repository.DealRepository;
import com.sachi.Repository.HomeCategoryRepository;
import com.sachi.Service.DealService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DealServiceImpl implements DealService{

	private final DealRepository dealRepository;
	private final HomeCategoryRepository homeCategoryRepository;
	@Override
	public List<Deal> getDeals() {
		return dealRepository.findAll() ;
	}

	@Override
	public Deal createDeal(Deal deal) throws Exception {
		Deal newDeal =dealRepository.save(deal);
		newDeal.setCategory(
				homeCategoryRepository.findById(
						deal.getCategory().getId()).orElseThrow(()->new Exception("category not found")));
		
		newDeal.setDiscount(deal.getDiscount());
		return dealRepository.save(newDeal);
	}

	@Override
	public Deal updateDeal(Deal deal) throws Exception {
		Deal findDeal =dealRepository.findById(deal.getId()).orElseThrow(()->new Exception("Deal not found"));
		HomeCategory category = homeCategoryRepository.findById(deal.getCategory().getId()).orElseThrow(()->new Exception("HomeCategory not found"));
		
		if(findDeal!= null) {
			if(deal.getDiscount()!=null) {
				findDeal.setDiscount(deal.getDiscount());
			}
			if(category!=null) {
				findDeal.setCategory(deal.getCategory());
			}
			return dealRepository.save(findDeal);
		}
		throw new Exception("Deal not found");
	}

	@Override
	public void deleteDeal(Long id) throws Exception {
		Deal findDeal =dealRepository.findById(id).orElseThrow(()->new Exception("Deal not found"));
		dealRepository.delete(findDeal);
	}

}
