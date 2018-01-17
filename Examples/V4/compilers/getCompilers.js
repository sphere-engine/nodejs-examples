var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// send request
request({
    
    url: 'http://' + endpoint + '/api/v4/compilers?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
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