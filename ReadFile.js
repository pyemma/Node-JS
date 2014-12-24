/*
	Write a program that uses a signle synchronous filesystem operation to read a file
	and print the number of newlines it contains to the console
*/

var fs = require('fs');

var filename = process.argv[2];
var buffer = fs.readFileSync(filename);

var content = buffer.toString();
var list = content.split('\n');

console.log(list.length - 1);