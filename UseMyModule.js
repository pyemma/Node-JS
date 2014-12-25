var mymodule = require('./MyModule.js');

var callback = function(err, list) {
	if(err != null)
		console.log("Error!");
	for(var i = 0; i < list.length; i++) 
		console.log(list[i]);
}

var pathname = process.argv[2];
var extension = process.argv[3];

mymodule(pathname, extension, callback);