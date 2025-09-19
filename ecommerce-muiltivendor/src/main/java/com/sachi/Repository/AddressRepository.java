package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
