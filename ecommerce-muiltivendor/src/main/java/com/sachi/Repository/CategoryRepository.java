package com.sachi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sachi.Model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{
	Category findByCategoryId(String categoryId);
}
