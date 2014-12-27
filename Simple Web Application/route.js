function route(pathname, handler, response, request) {
	console.log("About to route a request for " + pathname);
	if(typeof handler[pathname] === "function") {
		return handler[pathname](response, request);
	}
	else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-type" : "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
	
exports.route = route;