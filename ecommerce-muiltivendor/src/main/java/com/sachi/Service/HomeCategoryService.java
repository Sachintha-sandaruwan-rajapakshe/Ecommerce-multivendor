package com.sachi.Service;

import java.util.List;

import com.sachi.Model.HomeCategory;

public interface HomeCategoryService {
	
	HomeCategory createHomeCategory(HomeCategory homeCategory);
	List<HomeCategory> createCategories(List<HomeCategory> homeCategory);
	HomeCategory updateHomeCategory(HomeCategory homeCategory,Long id) throws Exception;
	List<HomeCategory> getAllHomecategory();
}
