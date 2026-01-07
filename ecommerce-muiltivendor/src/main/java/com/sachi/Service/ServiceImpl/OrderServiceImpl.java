package com.sachi.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.sachi.Domain.OrderStatus;
import com.sachi.Domain.PaymentStatus;
import com.sachi.Model.Address;
import com.sachi.Model.Cart;
import com.sachi.Model.CartItem;
import com.sachi.Model.Order;
import com.sachi.Model.OrderItem;
import com.sachi.Model.User;
import com.sachi.Repository.AddressRepository;
import com.sachi.Repository.CartRepository;
import com.sachi.Repository.OrderItemRepository;
import com.sachi.Repository.OrderRepository;
import com.sachi.Service.OrderService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

	private final OrderRepository orderRepository;
	private final AddressRepository  addressRepository;
	private final OrderItemRepository orderItemRepository; 
	private final CartRepository cartRepository;
	
	@Override
	public Set<Order> createOrder(User user, Address shippingAddress, Cart cart) throws Exception {

	    // 1️⃣ Ensure shipping address is attached to user
	    if (!user.getAddress().contains(shippingAddress)) {
	        user.getAddress().add(shippingAddress);
	        addressRepository.save(shippingAddress);
	    }

	    // 2️⃣ Initialize orders set
	    Set<Order> orders = new HashSet<>();

	    // 3️⃣ Group cart items by Seller ID
	    Map<Long, List<CartItem>> itemsBySeller = cart.getCartItems().stream()
	            .collect(Collectors.groupingBy(item -> item.getProduct().getSeller().getId()));

	    // 4️⃣ Loop through seller groups and create Order object
	    for (Map.Entry<Long, List<CartItem>> entry : itemsBySeller.entrySet()) {
	        Long sellerId = entry.getKey();
	        List<CartItem> items = entry.getValue();

	        // 4a️⃣ Calculate totals
	        int totalSellingPrice = items.stream().mapToInt(i -> i.getQuantity() * i.getSellingPrice()).sum();
	        int totalMrpPrice = items.stream().mapToInt(i -> i.getQuantity() * i.getMrpPrice()).sum();
	        int totalItem = items.stream().mapToInt(CartItem::getQuantity).sum();

	        // 4b️⃣ Create Order
	        Order createOrder = new Order();
	        createOrder.setUser(user);
	        createOrder.setSellerId(sellerId);
	        createOrder.setTotalItem(totalItem);
	        createOrder.setTotalSellingPrice(totalSellingPrice);
	        createOrder.setTotalMrpPrice(totalMrpPrice);
	        createOrder.setOrderStatus(OrderStatus.PENDING);
	        createOrder.setShippingAddress(shippingAddress);
	        createOrder.getPaymentDetails().setStatus(PaymentStatus.PENDING);

	        // 4c️⃣ Save Order first
	        Order savedOrder = orderRepository.save(createOrder);
	        orders.add(savedOrder);

	        // 4d️⃣ Map CartItems to OrderItems
	        List<OrderItem> orderItems = new ArrayList<>();
	        for (CartItem cartItem : items) {
	            OrderItem orderItem = new OrderItem();
	            orderItem.setOrder(savedOrder); // bi-directional
	            orderItem.setProduct(cartItem.getProduct());
	            orderItem.setQuantity(cartItem.getQuantity());
	            orderItem.setSize(cartItem.getSize());
	            orderItem.setMrpPrice(cartItem.getMrpPrice());
	            orderItem.setSellingPrice(cartItem.getSellingPrice());
	            orderItem.setUserId(cartItem.getUserId());

	            orderItems.add(orderItem);
	        }

	        // 4e️⃣ Save all OrderItems at once
	        orderItemRepository.saveAll(orderItems);
	        savedOrder.setOrderItems(orderItems); // update bi-directional
	    }

	    // 5️⃣ Clear cart after order
	    cart.getCartItems().clear();
	    cartRepository.save(cart);

	    return orders;
	}


	@Override
	public Order findOrderById(Long id) throws Exception {
		
		return orderRepository.findById(id).orElseThrow(()-> new Exception("Order not found with id !.. "+ id));
	}

	@Override
	public List<Order> userOrderHistory(Long userId) throws Exception {
	
		return orderRepository.findByUserId(userId); 
	}

	@Override
	public List<Order> sellerOrder(Long sellerId) throws Exception {
		return orderRepository.findBySellerId(sellerId);
	}

	@Override
	public Order updateOrderStatus(Long orderId, OrderStatus orderStatus) throws Exception {
		Order updateOrder = this.findOrderById(orderId);
		updateOrder.setOrderStatus(orderStatus);
		return orderRepository.save(updateOrder);
	}

	@Override
	public Order cancleOrder(User user, Long orderId) throws Exception {
		Order cancleOrder = this.findOrderById(orderId);
		
		if(!user.getId().equals(cancleOrder.getUser().getId())) {
			throw new Exception("can't cancel this order..!");
		}
		cancleOrder.setOrderStatus(OrderStatus.CANCELLED);
		cancleOrder.getPaymentDetails().setStatus(PaymentStatus.REFUNDED); // if refund processed
		cancleOrder.setDeliverDate(null);
		return orderRepository.save(cancleOrder);
	}


	@Override
	public OrderItem findById(Long id) throws Exception {
		
		return orderItemRepository.findById(id).orElseThrow(()->new Exception("Order Item not found !.."+id));
	}

}
