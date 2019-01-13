var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var fs = require('fs');

var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = (app) => {
	function hash(passwd){
		var hash = crypto.createHash('whirlpool');
		data = hash.update(passwd, 'utf-8');
		gen_hash= data.digest('hex');
		return (gen_hash);	
	}

	app.get('/ex02/modif.js', (req, res) => {
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
			old Password: <input type="password" name="oldpw" value="" />
			<br />
			new Password: <input type="password" name="newpw" value="" />
			<br />
			<input type="submit" name="submit" value="OK"/>
		</form>
	</body>
	</html>`
		res.send(template)
	});

	app.post('/ex02/modif.js', (req, res) => {
		let user_data_arr = [];
		let login = req.body.login;
		let oldpw = req.body.oldpw;
		let newpw = req.body.newpw;
		let submit = req.body.submit;

		if (submit != "OK" || !login || !oldpw || !newpw) {
			res.send('ERROR\n');
			return ;
		}

		fs.exists('../private/passwd', function(exist) {
			if (exist) {
				fs.readFile('../private/passwd', (err, data) => {
					var target = -42;
					var i;
					// deserialize the raw data to the array that contains users' info
					user_data_arr = JSON.parse(data)
					console.log(user_data_arr)
					// check if a user exist
					if (user_data_arr.length) {
						for (i = 0; i < user_data_arr.length; i++) {
							if (user_data_arr[i].login == login) {
								// check if passwd matched
								// console.log("=====================")
								// console.log(user_data_arr[i].passwd)
								// console.log(hash(oldpw))
								// console.log("=====================")
								if (user_data_arr[i].passwd === hash(oldpw)) { 
									target = i;
								}
							}
						}
						if (target == -42) {
							res.send('ERROR\n');
							return ;
						} 

						let user = {
							login: login,
							passwd: hash(newpw)
						}
						user_data_arr[target] = user;
						fs.writeFile('../private/passwd', JSON.stringify(user_data_arr), ()=>{
							res.send("OK\n");
						})
					}
				})
			} else { // if file not exist
				res.send('ERROR\n');
				return ;
			}
		})
	});
}