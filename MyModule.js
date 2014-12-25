module.exports = function (pathname, extension, callback) {
	var fs = require('fs');
	var path = require('path');

	fs.readdir(pathname, function (err, list) {
		if (err)
			return callback(err);
		var res = [];
		for(var i = 0; i < list.length; i++) {
			if(path.extname(list[i]) === "." + extension) {
				res[res.length] = list[i];
			}
		}
		callback(null, res);
	}) 
}