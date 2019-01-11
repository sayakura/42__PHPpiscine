function ft_split(string){
	let arr = string.split(' ');
	arr = arr.filter(word => word.length)
	return (arr);
}

if (process.argv.length > 2)
	console.log(ft_split(process.argv[2]).join(' '))