/*
	Write an HTTP server that receives only POST requests and converts incoming POST
	body characters to upper-case and returns it to the client.
*/

var http = require('http');
var map = require('through2-map');

server = http.createServer( function (request, response) {
	if(request.method != 'POST')
		return request.end('send me a POST\n');

	request.pipe(map( function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
})

server.listen(process.argv[2]);