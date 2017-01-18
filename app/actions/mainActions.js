"use strict";

import { fetchNewTodoId, fetchAllTodos, saveAllTodos } from "../utils/WebAPI";


// Add a todo
export const addTodo = (text) => {
	var action = {
		"type" : "ADD_TODO",
	}

	// Async
	return (dispatch) => {
		return fetchNewTodoId()
		.then((data) => {
			return dispatch(Object.assign(action, data, {
				text,
			}))
		})
	}
}

// Toggle the todo status
export const toggleTodoStatus = (id) => {
	return {
		"type" : "TOGGLE_TODO_STATUS",
		id,
	}
}

// Get Todos
export const getTodos = () => {
	var action = {
		"type" : "GET_TODOS",
	}
	
	// Async
	return (dispatch) => {
		return fetchAllTodos()
		.then((todos) => {
			return dispatch(Object.assign(action, {
				todos
			}))
		})
	}
}

// Save the todos
export const saveTodos = (todos) => {
	var action = {
		"type" : "SAVE_TODOS",
	};

	// Async
	return (dispatch) => {
		return saveAllTodos(todos)
		.then((xhr, res) => {
			dispatch(action);
		})
	}
}
