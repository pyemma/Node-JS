/*
	Write a program that performs an HTTP GET request to a URL provided to you 
	as the first command-line argument. Collect all data from the server (not just the first "data" event) 
	and then write two lines to the console (stdout).

	Use the third-party module Buffer List to handle the concataion. Provided the constructor 
	with a callback function.
*/
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.pipe(bl( function (err, data) {
		var length = data.toString().length;
		console.log(length);
		console.log(data.toString());
	}));
});
