package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.PaymentOrder;
@Repository
public interface PaymentOrderRepository extends JpaRepository<PaymentOrder, Long> {

	PaymentOrder findByPaymentlinkId(String paymentid);
}
