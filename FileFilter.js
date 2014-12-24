var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var extension = process.argv[3];

var filter = function (list) {
	for(var i = 0; i < list.length; i++) {
		var ext = path.extname(list[i]);
		if(ext.substring(1, ext.length) === extension) {
			console.log(list[i]);
		}
	}
} 

fs.readdir(pathname, function (err, list) {
	filter(list);
})