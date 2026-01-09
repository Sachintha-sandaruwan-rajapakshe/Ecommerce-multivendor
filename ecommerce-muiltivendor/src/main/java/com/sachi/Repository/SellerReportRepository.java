package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.SellerReport;

@Repository
public interface SellerReportRepository extends JpaRepository<SellerReport, Long> {
	SellerReport findBySellerId(Long id);
}
