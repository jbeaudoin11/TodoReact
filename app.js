require("colors"); // Add colors to console

// Webpack requires
var wp = require("webpack");
var wpMw = require("webpack-dev-middleware");
var wpConfig = require("./webpack.config");

// Express
var express = require("express");
var app = express();

// Public folder
app.use("/client", express.static("public"));

// Webpack setup
app.use(wpMw(wp(wpConfig), {
	"hot" : true,
	"stats" : {
		"colors" : true 
	},
}));

//API


// Start the server
app.listen(3000, () => {
	console.log("SERVER READY".green);
});
