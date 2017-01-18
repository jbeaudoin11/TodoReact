"use strict";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";

import { todos } from "./reducers/mainReducer";
import App from "./components/App";

const logger = createLogger();
const store = createStore(
	todos,
	applyMiddleware(
		thunk,
		logger,
	)
);
 
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

import { addTodo } from "./actions/mainActions";