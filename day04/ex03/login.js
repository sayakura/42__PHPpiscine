var auth = require('./auth.js');

module.exports = (app) => {
	app.get("/ex03/login.js",(req, res) => {
		if (!req.query.login || !req.query.passwd) {
			req.session.loggued_on_user = '';
			res.send('ERROR\n')
		}
		auth(req.query.login, req.query.passwd).then(validated => {
			if (req.query.login && req.query.passwd && validated) {
				req.session.loggued_on_user =  req.query.login;
				res.send('OK\n')
			} else {
				req.session.loggued_on_user = '';
				res.send('ERROR\n')
			}
		});
	});	
}
