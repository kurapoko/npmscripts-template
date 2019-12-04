const ssi = require('browser-sync');

module.exports = {
	"files": "./src/**/*.css, ./src/**/*.js, ./src/**/*.ejs",
	"server": {
		baseDir: "./dist/",
		index: "index.html"
	},
	"proxy": false,
	"port": 3000,
	/*
	"middleware": ssi({
		baseDir: "./dist",
		ext: ".html",
		version: "1.4.0"
	})
	*/
}