function ft_is_sort(arr)
{
	var temp = arr.slice(0);
	temp.sort();
	var sorted = 1;
	for (var i = 0; i < arr.length; i++)
	{
		if (temp[i] != arr[i])
		{
			sorted = 0;
			break ;
		}
	}
	return (sorted);
}

exports.ft_is_sort = ft_is_sort;