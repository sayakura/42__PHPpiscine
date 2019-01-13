var crypto = require('crypto');
var fs = require('fs');

function hash(passwd){
	var hash = crypto.createHash('whirlpool');
	data = hash.update(passwd, 'utf-8');
	gen_hash= data.digest('hex');
	return (gen_hash);	
}

module.exports =  (login, passwd) => {
	return new Promise((resolve, reject) => {
		fs.readFile('../private/passwd', (err, data) => { 
			if (err) {
				resolve (false); 
			}
			let user_data_arr = JSON.parse(data)
			for (i = 0; i < user_data_arr.length; i++) {
				if (user_data_arr[i].login == login) {
					if (user_data_arr[i].passwd === hash(passwd)) { 
						resolve (true); 
					}
				}
			}
			resolve (false); 
		});
	})
}
