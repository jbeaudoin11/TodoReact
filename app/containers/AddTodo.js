"use strict";

import React from "react";
import { connect } from "react-redux";
import { addTodo, saveTodos } from "../actions/mainActions";

const AddTodo = ({ todos, dispatch }) => {
	var input;	

	return (
		<div>
			<form>
				<input ref={(elem) => {
					// make a ref to this input
					input = elem;
				}} />
				<button
					onClick={(e) => {
						e.preventDefault();

						// Test if input is empty
						if(!input.value.trim()) {
							return;
						}

						// Dispatch the event
						dispatch(addTodo(input.value));

						// Reset the input field
						input.value = "";
					}}
				>
					Add Todo
				</button>
				<button 
					onClick={(e) => {
						e.preventDefault();

						// Dispatch the event
						dispatch(saveTodos(todos));
					}}
				>
					Save Todos
				</button>
			</form>
		</div>
	)
}

export default connect((state) => {
	return {
		"todos" : state,
	}
})(AddTodo);