var http = require('http');
var url = require('url');

module.exports =(req, res) => {
  let q = url.parse(req.url, true);
  for (k in q.query) {
	res.write(k + ': ' + q.query[k] + '\n');
  }
  res.end();
}