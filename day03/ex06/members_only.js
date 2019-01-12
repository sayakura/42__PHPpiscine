const http     = require('http');
var fs = require('fs');

module.exports = (req, res) => {
	var header = req.headers['authorization'] || '',        // get the header
	token = header.split(/\s+/).pop() || '',            // and the encoded auth token
	auth = new Buffer.from(token, 'base64').toString(),    // convert from base64
	parts = auth.split(/:/),                          // split on colon
	username = parts[0],
	password = parts[1];
	if (username === 'zaz' && password === 'jaimelespetitsponeys') {
		fs.readFile('../img/42.png', function(err, data){
			res.writeHead(200,{'Content-Type':'text/html'});
			let data_64 = data.toString('base64');
			let ret = "<html><body>\nHello Zaz<br />\n<img src=\"";
			ret += "data:image/png;base64,"
			ret += data_64;
			ret += "\"></body></html>";
			res.write(ret)
			res.end()
		});
		
	} else {
		let mes = 
`* About to connect() to eXrXpX.42.fr port 8xxx (#0)
* Trying xxx.xxx.xxx.xxx...
* connected
* Connected to eXrXpX.42.fr (xxx.xxx.xxx.xxx) port 8xxx (#0)
* Server auth using Basic with user 'root'
> GET /ex06/members_only.php HTTP/xxx
> Authorization: Basic xxxxxxxxxxxxxxx
> User-Agent: curl/xxxxx (x86_64-apple-darwin12.0) libcurl/xxxxxx OpenSSL/xxxxxx zlib/xxxxxx
> Host: eXrXpX.42.fr:8xxx
> Accept: */*
>
* HTTP 1.0, assume close after body
< HTTP/1.0 401 Unauthorized
< Date: Tue, 26 Mar 2013 09:42:42 GMT
< Server: Apache
< X-Powered-By: PHP/xxxxxx
< WWW-Authenticate: Basic realm=''Member area''
< Content-Length: 72
< Connection: close
< Content-Type: text/html
<
<html><body>That area is accessible for members only</body></html>
* Closing connection #0\n`
		res.end(mes);
	}

}