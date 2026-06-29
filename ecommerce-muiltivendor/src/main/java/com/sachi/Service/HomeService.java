package com.sachi.Service;

import java.util.List;

import com.sachi.Model.Home;
import com.sachi.Model.HomeCategory;

public interface HomeService {
	
	public Home createHomePageData(List<HomeCategory> homeCategories);
}
