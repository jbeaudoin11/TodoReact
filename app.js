require("colors"); // Add colors to console
var path = require("path");

// Webpack requires
var wp = require("webpack");
var wpMw = require("webpack-dev-middleware");
var wpConfig = require("./webpack.config");

// Express
var express = require("express");
var app = express();

// Body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// Public folder
app.use("/client", express.static("public"));

//REST API
	// simple in memory database
	var database = {
		"0" : {
			"id" : "0",
			"text" : "Todo 0",
			"status" : 0,
		},
		"1" : {
			"id" : "1",
			"text" : "Todo 1",
			"status" : 0,
		},
		"2" : {
			"id" : "2",
			"text" : "Todo 2",
			"status" : 1,
		},
	};
	var nextTodoId = 3

	// Get a new todo id
	app.get("/todo", (req, res) => {
		res.json({ "id" : "" + nextTodoId++ });
	});

	// Get all todos
	app.get("/todos", (req, res) => {
		res.json(database);
	});

	// Save all todos
	app.put("/todos", (req, res) => {
		database = req.body;

		res.status(200);
		res.end();
	});

// Webpack setup
app.use(wpMw(wp(wpConfig), {
	"hot" : true,
	"stats" : {
		"colors" : true,
		"chunks" : false,
	},
}));

// Default route
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/index.html"));
})

// Start the server
app.listen(3000, () => {
	console.log("SERVER READY ON [".green + "localhost:3000".cyan + "]".green);
});
