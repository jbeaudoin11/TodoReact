"use strict";

// Todo reducer
export const todo = (state = {}, action) => {
	switch(action.type) {
		case "ADD_TODO" :
			return {
				"id" : action.id,
				"text" : action.text,
				"status" : 0,
			}
		case "TOGGLE_TODO_STATUS" :
			return {
				...state,
				"status" : !state.status,
			}
		default :
			return state;
	}
}

// Todos reducer
export const todos = (state = {}, action) => {
	let t;
	switch(action.type) {
		case "ADD_TODO" :
			t = todo(undefined, action);
			return {
				...state,
				[t.id] : t,
			}
		case "TOGGLE_TODO_STATUS" :
			t = todo(state[action.id], action);
			return {
				...state,
				[t.id] : t,
			}
		case "GET_TODOS" :
			return {
				...action.todos
			};
		default :
			return state;
	}
}