var net = require('net');

function now () {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if(month < 10)
		month = '0' + month;
	var day = date.getDate();
	if(day < 10)
		day = '0' + month;
	var hour = date.getHours();
	if(hour < 10)
		hour = '0' + hour;
	var minutes = date.getMinutes();
	if(minutes < 10)
		minutes = '0' + minutes;
	var data = year + "-" + month + "-" + day + " " + hour + ":" + minutes + "\n";
	return data;
}

var server = net.createServer( function (socket) {
	socket.write(now());
	socket.end(); 
});

server.listen(process.argv[2]);