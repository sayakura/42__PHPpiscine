module.exports = (app) => {
	app.get("/ex03/whoami.js", (req, res) => {
		if (req.session && req.session.loggued_on_user && req.session.loggued_on_user.length) {
			res.send(req.session.loggued_on_user + '\n');
		} else {
			res.send('ERROR\n');
		}
	});	
}

// var express = require('express');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
// var app = express(); 

// app.use(cookieParser());
// app.use(session({
// 	secret: 'kura peng',
// 	resave: false,
// 	saveUninitialized: true,
// 	cookie: { secure: false }
//   }))
