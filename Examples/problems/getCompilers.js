var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

request({
    
    url: 'http://' + endpoint + '/api/v3/compilers?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
	
    if (error) {
        console.log('Connection problem');
    }
    
    if (response) {
        if (response.statusCode === 200) {
            console.log(JSON.parse(response.body)); // list of compilers in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
        }
    }
});