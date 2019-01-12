var http = require('http');
var url = require('url');

let cookie = {};

function set_cookie(name, value, res, req){
	// multiple cookies
	// let cookie = req.headers['cookie'];
	// if (cookie) {
	// 	cookie_arr = cookie.split(';')
	// 	for (let i = 0; i < cookie_arr.length; i++) {
	// 		let temp = cookie_arr[i].split('=')
	// 		if (name == temp[0])
	// 		{
	// 			temp[1] = value;
	// 			temp = temp.join('=')
	// 			cookie_arr[i] = temp;
	// 			let ret = cookie_arr.join(';')
	// 			res.setHeader('Set-Cookie', ret)
	// 			return ;
	// 		}
	// 	}
		
	// }
	res.setHeader('Set-Cookie', name + '=' + value)
}

function get_cookie_and_write(name, res, req) {
	if (!req.headers['cookie'])
		return ;
	let cookie_arr = (req.headers['cookie']).split(';')
	cookie_arr.forEach(cookie => {
		let temp = cookie.split("=")
		if (name == temp[0])
			if (temp[1])
				res.write(temp[1] + '\n');
	});
}

function actionHandler(action, name, value, res, req) {
	if (!action)
		return (null);
	switch(action) {
		case 'set':
			set_cookie(name, value, res, req);
			break ;
		case 'get':
			get_cookie_and_write(name, res, req);
		break ;
		case 'del':
			res.setHeader('Set-Cookie', name + '=')
		break ;
		default:
			return (null)
	}
}

module.exports = (req, res) => {
	let q = url.parse(req.url, true);
	let data = q.query;
	actionHandler(data.action, data.name, data.value, res, req)
	res.end();
}