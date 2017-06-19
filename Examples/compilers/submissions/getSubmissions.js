var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

var submissionsIds = [2016, 2017];

request({
	
	url: 'http://' + endpoint + '/api/v3/submissions?ids=' + submissionsIds.join() + '&access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
   
	if (error) {
		console.log('Connection problem');
	}
	
    if (response) {
		if (response.statusCode === 200) {
			console.log(JSON.parse(response.body)); // list of submissions in JSON
		}
		else {
			if (response.statusCode === 401) {
				console.log('Invalid access token');
			}
		}
	}
});