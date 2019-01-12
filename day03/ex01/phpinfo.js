const http     = require('http');
const os		= require('os');

module.exports = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
	let ret = [process.env, process.version, os.cpus()];
    res.end(JSON.stringify(ret));
};
