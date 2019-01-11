if (process.argv.length == 2){
	console.log();
	process.exit();
}

var key = process.argv[2];
var dict = {};
var temp;
process.argv.forEach((element, index) => {
	if (index > 2){
		temp = element.split(":");
		dict[temp[0]] = temp[1];
	}
});
if (dict[key])
	console.log(dict[key]);