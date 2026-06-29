package com.sachi.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sachi.Model.Deal;
import com.sachi.Response.ApiResponse;
import com.sachi.Service.DealService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("admin/deals")
@RequiredArgsConstructor
public class DealController {
	
	
	private final DealService dealService;
	
	@PostMapping
	public ResponseEntity<Deal>createDeals(@RequestBody Deal deal) throws Exception{
		
		Deal newDeal =dealService.createDeal(deal);
		return ResponseEntity.ok(newDeal);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Deal> updateDeal(@RequestBody Deal deal,@PathVariable Long id) throws Exception{
		Deal updateDeal =dealService.updateDeal(deal);
		return ResponseEntity.ok(updateDeal);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteDeal(@PathVariable Long id) throws Exception{
		dealService.deleteDeal(id);
		
		ApiResponse apiResponse =new ApiResponse();
		
		apiResponse.setMessange("deal deleted");
		return new ResponseEntity<>(apiResponse, HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Deal>> getDeals() {

	    List<Deal> deals = dealService.getDeals();

	    return ResponseEntity.ok(deals);
	}

}
