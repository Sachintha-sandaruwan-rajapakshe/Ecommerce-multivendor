package com.sachi.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sachi.Domain.HomeCAtegorySection;
import com.sachi.Model.Deal;
import com.sachi.Model.Home;
import com.sachi.Model.HomeCategory;
import com.sachi.Repository.DealRepository;
import com.sachi.Service.HomeService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {
	
	private final DealRepository dealRepository;

	@Override
	public Home createHomePageData(List<HomeCategory> allCategories) {
		List<HomeCategory> gridCategories =allCategories.stream()
				.filter(category->category.getSection()==HomeCAtegorySection.GRID)
				.collect(Collectors.toList());
		List<HomeCategory> shopByCategories =allCategories.stream()
				.filter(category->category.getSection()==HomeCAtegorySection.SHOP_BY_CATEGORIES)
				.collect(Collectors.toList());
		List<HomeCategory> electricCategories =allCategories.stream()
				.filter(category->category.getSection()==HomeCAtegorySection.ELECTRIC_CATEGORIES)
				.collect(Collectors.toList());
		List<HomeCategory> dealCategories =allCategories.stream()
				.filter(category->category.getSection()==HomeCAtegorySection.DEALS)
				.collect(Collectors.toList());
		
		List<Deal> createDeals =new ArrayList<>();
		
		if(dealRepository.findAll().isEmpty()) {
			List<Deal> deal = allCategories.stream()
					.filter(category->category.getSection()==HomeCAtegorySection.DEALS)
					.map(category-> new Deal(null,10,category)).collect(Collectors.toList());
			createDeals =dealRepository.saveAll(deal);
		}else {
			createDeals = dealRepository.findAll();
		}
		
		Home home = new Home();
		home.setGrid(gridCategories);
		home.setElectricCategories(electricCategories);
		home.setShopByCategories(shopByCategories);
		home.setDeals(createDeals);
		home.setDealcategories(dealCategories);
		
		return home;
	}

}
