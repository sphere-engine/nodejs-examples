var request = require('request');

var endpoint = '<endpoint>';

var authData = {
	username: '<username>',
	password: '<password>'
};

request({
	
	url: 'http://' + endpoint + '/api/v3/auth',
	method: 'POST',
	form: authData
}, function (error, response, body) {
	
    if (error) {
		console.log('Connection problem');
	}
	
    if (response) {
		if (response.statusCode === 200) {
			console.log(JSON.parse(response.body)); // auth data in JSON
		}
		else {
			if (response.statusCode === 401) {
				console.log('Invalid username or password');
			}
			if (response.statusCode === 400) {
				console.log('Empty username or password');
			}
		}
	}
});