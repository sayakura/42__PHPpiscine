function ft_split(string){
	let arr = string.split(' ');
	arr = arr.filter(word => word.length)
	return (arr);
}

if (process.argv.length > 2)
{
	var arr = ft_split(process.argv[2])
	for (var i = 1; i < arr.length; i++)
	{
		if (i != 1)
			process.stdout.write(' ');
		process.stdout.write(arr[i])
	}
	if (arr.length > 1)
		process.stdout.write(' ');
	console.log(arr[0])
}