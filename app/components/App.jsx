"use strict";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import AddTodo from "../components/AddTodo";
import TodoList from "./TodoList";

class App extends Component {
	render() {
		return (
			<div>
				<AddTodo />
				<TodoList />
			</div>
		)
	}
}
App.contextTypes = {
	"store" : PropTypes.object,
}

export default connect()(App);