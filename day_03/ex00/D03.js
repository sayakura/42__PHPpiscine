var http = require('http');
var url = require('url');

let ex01_handler = require('../ex01/phpinfo.js');
let ex02_handler = require('../ex02/print_get.js');
let ex03_handler = require('../ex03/cookie_crisp.js');
let ex04_handler = require('../ex04/raw_text.js');
let ex05_handler = require('../ex05/read_img.js');
let ex06_handler = require('../ex06/members_only.js');

function dispatcher(path, req, res) {
	switch (path) {
		case '/ex01/phpinfo.js':
			ex01_handler(req, res)
			break ;
		case '/ex02/print_get.js':
			ex02_handler(req, res)
			break ;
		case '/ex03/cookie_crisp.js':
			ex03_handler(req, res)
			break ;
		case '/ex04/raw_text.js':
			ex04_handler(req, res)
			break ;
		case '/ex05/read_img.js':
			ex05_handler(req, res)
			break ;
		case '/ex06/members_only.js':
			ex06_handler(req, res)
			break ;
		default:
		res.end();
	}
}

const server = http.createServer((req, res) => {
	let q = url.parse(req.url, true);
	var filename = q.pathname;
	dispatcher(filename, req, res);
});
console.log("http://e1z4r15p5.42.us.org:8100")
server.listen(8100);

