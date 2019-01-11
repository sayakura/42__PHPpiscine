var ft_split = require("./ft_split.js").ft_split

var arr = 
arr = ft_split("Hello     World AAA")
console.log(arr)
for (var i = 0; i < arr.length; i++)
	console.log("%d => %s", i, arr[i]);