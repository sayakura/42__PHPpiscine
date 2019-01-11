var ft_is_sort = require("./ft_is_sort.js").ft_is_sort;

var arr = [];
process.argv.forEach((element, index) => {
	if (index > 1)
		arr.push(element);
});

if (ft_is_sort(arr))
	console.log("The array is sorted");
else
	console.log("The array is not sorted");