var http = require("http");
var url = require("url");

function start(route, handler) {

	var server = http.createServer( function (request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname, handler, response, request);
	});

	server.listen(8888);
	console.log("Server has started.");
}

exports.start = start;