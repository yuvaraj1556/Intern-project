package com.example.ToDoList.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ToDoList.model.Items;
import com.example.ToDoList.repository.ItemsRepo;

@Service
public class ItemsService {
	
	@Autowired
	ItemsRepo itemsRepo;
	
	public List<Items> getItems() {
		return itemsRepo.findAll();
	}

	public void addItems(Items item) {
		itemsRepo.save(item);
	}

	public void updateCheck(Items item) {
		itemsRepo.save(item);
	}

	public void deleteItem(Items item) {
		itemsRepo.delete(item);
	}
	
	

}
