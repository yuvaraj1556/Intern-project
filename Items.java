package com.example.ToDoList.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
public class Items {
	@Id
	private int id;
	private boolean checked;
	private String text;
	public Items() {
		
	}
	public Items(boolean checked,String text) {
		this.checked = checked;
		this.text = text;
	}
}
