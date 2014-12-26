/*
	Write an HTTP server that servers JSON data when it receives a GET request to 
	the path '/api/parsetime'. Expect teh request to contain a query string with a key
	'iso' and an ISO-format time as the value.
	Add second endpoint for the path '/api/unixtime' which accepts the same query but
	returns UNIX epoch time in milliseconds.
*/
var http = require('http');
var url = require('url');

var server = http.createServer( function (request, response) {
	var urlinfo = url.parse(request.url, true);
	var date = new Date(urlinfo.query["iso"]);
	var list = urlinfo.pathname.split('/');
	var obj = new Object();
	if(list[list.length - 1] === 'unixtime') {
		obj.unixtime = date.getTime();
	}
	else {
		obj.hour = date.getHours();
		obj.minute = date.getMinutes();
		obj.second = date.getSeconds();
	}

	response.writeHead(200, {'Content-Type': 'application/json'});
	response.end(JSON.stringify(obj));
});

server.listen(process.argv[2]);