if (process.argv.length != 3){
	console.log("Incorrect Parameters");
	process.exit();
}

function is_number(a){
	return a >= '0' && a <= '9';
}

var equ = process.argv[2];
var x = parseInt(equ);
if (isNaN(x))
{
	console.log("Syntax Error");
	process.exit();
}

var op;
var i = 0;
while (i < equ.length && is_number(equ[i]))
	i++;
while (i < equ.length && (equ[i] == ' ' || equ[i] == '\t'))
	i++;
if (i < equ.length)
	op = equ[i];
equ = equ.slice(++i);
var y = parseInt(equ);
if (!op || !y || isNaN(y))
{
	console.log("Syntax Error");
	process.exit();
}

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
		console.log("Syntax Error");
		break ;
}
