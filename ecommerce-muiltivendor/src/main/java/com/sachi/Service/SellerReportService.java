package com.sachi.Service;

import com.sachi.Model.Seller;
import com.sachi.Model.SellerReport;

public interface SellerReportService {

	SellerReport getSellerReport(Seller seller)throws Exception;
	SellerReport updateSellerReport(SellerReport sellerReport)throws Exception;
	
}
