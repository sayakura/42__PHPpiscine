var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var fs = require('fs');
var app = express();
app.use(cookieParser());

module.exports = (app) => {
	function hash(passwd){
		var hash = crypto.createHash('whirlpool');
		data = hash.update(passwd, 'utf-8');
		gen_hash= data.digest('hex');
		return (gen_hash);	
	}
	app.get('/ex01/create.js', (req, res) => {
		let template = 
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Title</title>
	</head>
	<body>
		<form action="create.js" method="POST">
			Login: <input type="text" name="login" value="" />
			<br />
			Password: <input type="password" name="passwd" value="" />
			<br />
			<input type="submit" name="submit" value="OK"/>
		</form>
	</body>
	</html>`
		res.send(template)
	});
	app.post('/ex01/create.js', (req, res) => {
		let ret = "OK\n";
		let user_data_arr = [];
		let login = req.body.login;
		let passwd = req.body.passwd;
		let submit = req.body.submit;

		if (submit != "OK" || !login || !passwd) {
			ret = 'ERROR\n'
			res.send(ret);
			return ;
		} 
		fs.exists('../private/passwd', function(exist) {
			if (exist) {
				fs.readFile('../private/passwd', (err, data) => {
					let account_exist = false; 
					// deserialize the raw data to the array that contains users' info
					user_data_arr = JSON.parse(data)
					console.log(user_data_arr)
					// check if a user exist
					if (user_data_arr.length) {
						user_data_arr.forEach(element => {
							if (element.login == login) {
								account_exist = true;
							}
						});
					}
					if (account_exist) {
						ret = 'ERROR\n'
						res.send(ret);
						return ;
					}

					let user = {
						login: login,
						passwd: hash(passwd)
					}
					user_data_arr.push(user)
					fs.writeFile('../private/passwd', JSON.stringify(user_data_arr), ()=>{
						res.send(ret);
					})
				})
			} else { // if file not exist
				let user = {
					login: login,
					passwd: hash(passwd)
				}
				user_data_arr.push(user)
				var writeStream = fs.createWriteStream('../private/passwd');
				writeStream.write(JSON.stringify(user_data_arr));
				writeStream.end();
				res.send(ret);
			}
		})
	});
}