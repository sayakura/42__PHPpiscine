const http     = require('http');
var fs = require('fs');
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"];

function getFormattedDate() {
	var d = new Date();
	var day = days[d.getDay()];
	var hr = d.getHours();
	var min = d.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var date = d.getDate();
	var month = months[d.getMonth()];
	var year = d.getFullYear();
	var sec = d.getSeconds();
	let x = day + ", " + d.getDay()  + " " + month + " " + year + ' ' + hr + ':' + min + ':' + sec + ' GMT'; 
	return (x)
}

module.exports = (req, res) => {
	fs.readFile('../img/42.png', function(err, data){
		res.writeHead(200, {
				'Date': getFormattedDate(),
				'Content-Type': 'image/png', 
		});
		res.write(data);
		res.end();
	});
}