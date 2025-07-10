package com.example.ToDoList.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoList.model.Items;
import com.example.ToDoList.service.ItemsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemsController {
	
	@Autowired
	ItemsService itemsService;
	
	@GetMapping("/items")
	public List<Items> getItems(){
		return itemsService.getItems();
	}
	
	@PostMapping("/items")
	public void addItems(@RequestBody Items item) {
		itemsService.addItems(item);
	}
	
	@PutMapping("/items/{id}")
	public void updateCheck(@RequestBody Items item) {
		itemsService.updateCheck(item);
	}
	
	@DeleteMapping("/items/{id}")
	public void deleteItem(@RequestBody Items item) {
		itemsService.deleteItem(item);
	}
}
