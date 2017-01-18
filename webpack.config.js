var wp = require("webpack");
var path = require("path");

// var DST_FOLDER = path.join(__dirname, "client");
var SRC_FOLDER = path.join(__dirname, "app");

module.exports = {
	"entry" : path.join(SRC_FOLDER, "index.jsx"),
	"output" : {
		// "path" : "/",
		"path" : path.join(__dirname, "/build"),
		"filename" : "bundle.js"
	},
	"resolve" : {
		"root" : SRC_FOLDER,
		"extensions" : ["", ".js", ".jsx"],
	},
	"module" : {
		"loaders" : [
			{
				"test" : /\.jsx$/,
				"loader" : "babel",
				"exclude" : /node_modules/,
			},
			{
				"test" : /\.js$/,
				"loader" : "babel",
				"exclude" : /node_modules/,
			},
			// {
			// 	"test" : /\.js?$/,
			// 	"loader" : "babel-loader"
			// },
		]
	}
}
