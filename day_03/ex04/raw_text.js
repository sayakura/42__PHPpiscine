
const http     = require('http');
module.exports = (req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" })
	res.write('<html><body>Hello</body></html>\n');
    res.end();
}