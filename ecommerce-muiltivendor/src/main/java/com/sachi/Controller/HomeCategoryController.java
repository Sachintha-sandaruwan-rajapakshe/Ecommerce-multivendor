package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Home;
import com.sachi.Model.HomeCategory;
import com.sachi.Service.HomeCategoryService;
import com.sachi.Service.HomeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class HomeCategoryController {
	
	private final HomeCategoryService homeCategoryService;
	private final HomeService homeService; 
	
	@PostMapping("/home/categories")
	public ResponseEntity<Home> createHomeCategories(@RequestBody List<HomeCategory> homeCategory){
		List<HomeCategory> categories = homeCategoryService.createCategories(homeCategory);
		Home home = homeService.createHomePageData(categories);
		return new ResponseEntity<>(home,HttpStatus.CREATED);
	}
	
	@GetMapping("/admin/home-category")
	public ResponseEntity<List<HomeCategory>> getHomeCategory(){
		List<HomeCategory> categories =homeCategoryService.getAllHomecategory();
		return ResponseEntity.ok(categories);
	}
	
	@PatchMapping("/admin/home-category/{id}")
	public ResponseEntity<HomeCategory> updateHomeCategory(@PathVariable Long id ,@RequestBody HomeCategory homeCategory) throws Exception{
		HomeCategory updateCategory =homeCategoryService.updateHomeCategory(homeCategory, id);
		return ResponseEntity.ok(updateCategory);
	}
	
	

}
