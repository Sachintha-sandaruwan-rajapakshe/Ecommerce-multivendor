package com.sachi.Service.ServiceImpl;

import org.springframework.stereotype.Service;

import com.sachi.Model.Seller;
import com.sachi.Model.SellerReport;
import com.sachi.Repository.SellerReportRepository;
import com.sachi.Service.SellerReportService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SellerReportServiceImpl implements SellerReportService{
	
	private final SellerReportRepository sellerReportRepository;
	
	@Override
	public SellerReport getSellerReport(Seller seller) throws Exception {
	SellerReport findseller =sellerReportRepository.findBySellerId(seller.getId());
	
		if(findseller==null) {
			SellerReport newReport = new SellerReport();
			newReport.setSeller(seller);
			return sellerReportRepository.save(newReport);
		}
		return findseller;
	}

	@Override
	public SellerReport updateSellerReport(SellerReport sellerReport) throws Exception {
		return sellerReportRepository.save(sellerReport);
	}

}
