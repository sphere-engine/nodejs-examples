var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

var judgeData = {
	compiler: 11,
	sourceCode: '<source_code>'
};

request({
	
	url: 'http://' + endpoint + '/api/v3/judges?access_token=' + accessToken,
    method: 'POST',
	form: judgeData
}, function (error, response, body) {
	
    if (error) {
		console.log('Connection problem');
	}
	
    if (response) {
		if (response.statusCode === 201) {
			console.log(JSON.parse(response.body)); // judge data in JSON
		}
		else {
			if (response.statusCode === 401) {
				console.log('Invalid access token');
			}
			if (response.statusCode === 400) {
				console.log('Empty source code');
			}	
			if (response.statusCode === 404) {
				console.log('Compiler does not exist');
			}
		}
	}
});