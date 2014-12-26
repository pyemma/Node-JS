/*
	Write an HTTP server that servers the same text file for each request it receives.
*/

var http = require('http');
var fs = require('fs');

var server = http.createServer( function (request, response) {
	response.writeHead(200, { 'content-type' : 'text/plain'});
	fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);