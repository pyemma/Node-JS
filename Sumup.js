/* 
	Calculate the sum passed in from console by argument.

	process.argv contains all parameters.
	Number() converts a string to a number.
*/
var list = process.argv;

var sum = 0;

for(var i = 2; i < list.length; i++) {
	sum = sum + Number(list[i]);
}

console.log(sum);