package com.sachi.Service.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sachi.Model.HomeCategory;
import com.sachi.Repository.HomeCategoryRepository;
import com.sachi.Service.HomeCategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HomeCategoryServiceImpl implements HomeCategoryService {

	private final HomeCategoryRepository homeCategoryRepository;
	@Override
	public HomeCategory createHomeCategory(HomeCategory homeCategory) {
		
		return homeCategoryRepository.save(null);
	}

	@Override
	public List<HomeCategory> createCategories(List<HomeCategory> homeCategory) {
		if(homeCategoryRepository.findAll().isEmpty()) {
			return homeCategoryRepository.saveAll(homeCategory);
		}
		return homeCategoryRepository.findAll();
	}

	@Override
	public HomeCategory updateHomeCategory(HomeCategory homeCategory, Long id) throws Exception {
		HomeCategory findCategory = homeCategoryRepository.findById(id).orElseThrow(()->new Exception("Category not found"));
		if(homeCategory.getImage()!=null) {
			findCategory.setImage(homeCategory.getImage());
		}
		if(homeCategory.getCategoryId() != null) {
			findCategory.setCategoryId(homeCategory.getCategoryId());
		}
		return homeCategoryRepository.save(findCategory);
	}

	@Override
	public List<HomeCategory> getAllHomecategory() {
		return homeCategoryRepository.findAll();
	}

}
