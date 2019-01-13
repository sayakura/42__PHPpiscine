var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	secret: 'kura peng',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
  }))
let sessions = {};

require('../ex01/create.js')(app);
require('../ex02/modif.js')(app);
require('../ex03/login.js')(app);
require('../ex03/logout.js')(app);
require('../ex03/whoami.js')(app);

app.get('/ex00/index.js', (req, res) => {
	let login = ''
	let passwd = ''
	if (req.cookies && req.cookies.NODESESSID && sessions[req.cookies.NODESESSID]) {
		login = sessions[req.cookies.NODESESSID].login;
		passwd = sessions[req.cookies.NODESESSID].passwd;
	} else if (req.query.submit == "OK" && req.query.login && req.query.passwd){
		sessions[req.sessionID] = {};
		sessions[req.sessionID].login = req.query.login;
		sessions[req.sessionID].passwd = req.query.passwd; 
		login =  req.query.login;
		passwd =  req.query.passwd; 
		res.cookie('NODESESSID', req.sessionID);
	} else 
		res.cookie('NODESESSID', req.sessionID);
	let template = 
`<html><body>
    <form action="index.js" method="GET">
        Login: <input type="text" name="login" value="${login}"/>
        <br />
        Password: <input type="password" name="passwd" value="${passwd}"/>
        <br />
        <input type="submit" name="submit" value="OK"/>
    </form>
</body></html>\n`
	res.send(template)
});
app.listen(8100);