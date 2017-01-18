"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import Todo from "./Todo";
import { getTodos } from "../actions/mainActions";

class TodoList extends Component {

	componentWillMount() {
		// Load the todo list
		this.props.fetchTodos()
	}

	render() {
		const todos = this.props.todos;

		return (
			<ul>
				{Object.keys(todos).map((id) => {
					let t = todos[id];

					return (
						<Todo
							key={id}
							{...t}
						/>
					)
				})}
			</ul>
		)
	}
}

export default connect((state) => {
	return {
		"todos" : state,
	}
}, (dispatch) => {
	return {
		"fetchTodos" : () => {
			return dispatch(getTodos());
		}
	}
})(TodoList);