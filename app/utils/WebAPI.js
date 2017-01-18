"use strict";

import { get, put }  from "superagent";

const SERVER_URL = "localhost:3000/";

// Get a new todo id
export const fetchNewTodoId = () => {
	return get("/todo")
		.accept("json")
		.then((res) => res.body);
}

// Get all todos
export const fetchAllTodos = () => {
	return get("/todos")
		.accept("json")
		.then((res) => res.body);
}

// Save all todos
export const saveAllTodos = (todos) => {
	return put("/todos")
		.type("json")
		.accept("json")
		.send(todos)
		.then((res) => res.body);
}