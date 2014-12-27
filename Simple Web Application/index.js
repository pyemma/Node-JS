var server = require("./server.js");
var router = require("./route.js");
var requestHandler = require("./requestHandler.js");

var handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
handler["/show"] = requestHandler.show;
server.start(router.route, handler);