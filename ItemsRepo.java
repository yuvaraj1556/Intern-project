package com.example.ToDoList.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ToDoList.model.Items;

@Repository
public interface ItemsRepo extends JpaRepository<Items,Integer>{
	
}
