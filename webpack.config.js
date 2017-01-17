var wp = require("webpack");
var path = require("path");

var DST_FOLDER = path.join(__dirname, "client");
var SRC_FOLDER = path.join(__dirname, "app");

module.exports = {
	"entry" : path.join(SRC_FOLDER, "index.jsx"),
	"output" : {
		"path" : "/",
		"filename" : "bundle.js"
	},
	"module" : {
		"loaders" : [
			{
				"test" : /\.jsx?$/,
				"loader" : "babel",
			},
			{
				"test" : /\.js?$/,
				"loader" : "babel"
			},
			{
				"test" : /\.json?$/,
				"loader" : "json",
			},
		]
	}
}
