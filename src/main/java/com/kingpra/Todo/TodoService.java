package com.kingpra.Todo;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
	private TodoController todoController;

	public TodoService(TodoController todoController) {
		this.todoController = todoController;
	}

	public void completionFalse(Todo todo) {
		todo.setCompleted(false);
	}

	public void completionToggle(Todo task) {
		if (task.isCompleted()) {
			task.setCompleted(false);
		} else {
			task.setCompleted(true);
		}
	}

}
