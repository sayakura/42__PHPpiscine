if (process.argv.length != 5){
	console.log("Incorrect Parameters");
	process.exit();
}
function ft_split(string){
	let arr = string.split(' ');
	arr = arr.filter(word => word.length)
	return (arr);
}

var x = parseInt(process.argv[2]);
var op = ft_split(process.argv[3])[0];
var y = parseInt(process.argv[4]);

switch(op){
	case '+':
		console.log(x + y);
		break ;
	case '-':
		console.log(x - y);
		break ;
	case '/':
		if (y === 0){
			console.log("Divide by zero");
			break ;
		}
		console.log(x / y);
		break ;
	case '*':
		console.log(x * y);
		break ;
	case '%':
		if (y === 0){
			console.log("Modulo by zero");
			break ;
		}
		console.log(x % y);
		break ;
	default:
		console.log("Invalid operator");
		break ;
}
