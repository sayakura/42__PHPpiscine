function ft_split(string){
	let arr = string.split(' ');
	arr = arr.filter(word => word.length)
	return (arr);
}

var ret = [];
process.argv.forEach((el, index) => {
	if (index > 1)
		ret = ret.concat(ft_split(process.argv[index]));
});
ret = ret.sort()
ret.forEach(ele => console.log(ele));