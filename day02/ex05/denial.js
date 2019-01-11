var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

if (process.argv.length < 4) 
	process.exit()

let contents
try {
	contents = fs.readFileSync(process.argv[2], 'utf8');
} catch(err) {
	process.exit()
}

let data = contents.split('\n');
let data_head = [];
let $name = {};
let $surname = {}
let $last_name = {};
let $IP = {};
let index = 0;

data.forEach(line => {
	if (index === 0) {
		data_head = line.split(';')
	} else {
		let temp_arr = line.split(';')
		$name[temp_arr[temp_arr.length - 1]] = temp_arr[0]
		$surname[temp_arr[1]] = temp_arr[1]
		$last_name[temp_arr[1]] = temp_arr[0]
		$IP[temp_arr[1]] = temp_arr[temp_arr.length - 2]
	}
	index++;
});

let scope = {
	$name: $name,
	$surname: $surname,
	$last_name: $last_name,
	$IP: $IP
}
if (!data_head.includes(process.argv[3]) || process.argv[3] == 'surname')
{
	rl.close();
	process.exit()
} else {
	let ret = true;
	let ask = function(){
		rl.question('Enter your Command: ', function(answer){
			try {
				answer = answer.replace('$', 'this.$')
				let f = new Function(answer);
				(f.bind(scope))()
			} catch(err) {
				console.log("I dont think that's a valid javascript command.")
			};
			ask();
		});
	}
	ask();
}
