var fs = require('fs');

var filename = process.argv[2];

var readLines = function(content) {
	var lines = content.split('\n').length - 1;
	console.log(lines);
}

fs.readFile(filename, function doneReading(err, buffer) {
	var content = buffer.toString();
	readLines(content);
})