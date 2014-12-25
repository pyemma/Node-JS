/*
	Provided with three URLs as the first three command-line arguments and 
	collect all the content of the url. Print them as the order of the urls.

	Use function to cache the order information instead of a single for loop.
*/

var http = require('http');
var bl = require('bl');

var cnt = 0;
var buffer = [];

function printResults () {
	for(var i = 0; i < 3; i++) {
		console.log(buffer[i]);
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if(err)
				console.log(err);
			buffer[index] = data.toString();
			cnt++;
			if(cnt == 3)
				printResults();
		}));
	});
}

for(var i = 0; i < 3; i++)
	httpGet(i);