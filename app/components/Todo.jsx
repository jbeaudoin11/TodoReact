"use strict";

import React from "react";
import { connect } from "react-redux";

import { toggleTodoStatus } from "../actions/mainActions";

const Todo = ({id, status, text, toggleTodoStatus}) => {
	return (
		<li
			style={{
				"cursor" : "pointer",
				"textDecoration" : (status) ? "line-through" : "none",
			}}
			onClick={(e) => {
				e.preventDefault();

				toggleTodoStatus(id);
			}}
		>
			{text}
		</li>
	)
}

export default connect(null, (dispatch) => {
	return {
		"toggleTodoStatus" : (id) => {
			dispatch(toggleTodoStatus(id));
		}, 
	}
})(Todo);