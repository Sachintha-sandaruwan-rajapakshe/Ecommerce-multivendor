package com.sachi.Service;

import java.util.List;
import java.util.Set;

import com.sachi.Domain.OrderStatus;
import com.sachi.Model.Address;
import com.sachi.Model.Cart;
import com.sachi.Model.Order;
import com.sachi.Model.OrderItem;
import com.sachi.Model.User;

public interface OrderService {
	Set<Order> createOrder(User user, Address shippingAddress , Cart cart)throws Exception;
	Order findOrderById(Long id )throws Exception;
	List<Order> userOrderHistory(Long userId) throws Exception;
	List<Order> sellersOrder(Long sellerId)throws Exception;
	Order updateOrderStatus(Long orderId ,OrderStatus orderStatus)throws Exception;
	Order cancleOrder(User user,Long orderId)throws Exception;
	OrderItem getOrderItemById(Long id)throws Exception;

}
