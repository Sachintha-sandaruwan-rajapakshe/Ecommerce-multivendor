package com.sachi.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.sachi.Model.VerificationCode;


public interface VerificationCodeRepository extends JpaRepository<VerificationCode, Long>{
	VerificationCode findByEmail(String email);
}
