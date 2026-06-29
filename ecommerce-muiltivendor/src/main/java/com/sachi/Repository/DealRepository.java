package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.Deal;

public interface DealRepository extends JpaRepository<Deal, Long> {

}
