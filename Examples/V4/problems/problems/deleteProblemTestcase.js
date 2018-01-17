var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemCode = 'EXAMPLE';
var testcaseNumber = 0;

// send request
request({
    
    url: 'http://' + endpoint + '/api/v4/problems/' + problemCode + '/testcases/' + testcaseNumber + '?access_token=' + accessToken,
    method: 'DELETE'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log('Testcase deleted');
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            } else if (response.statusCode === 403) {
                console.log('Access denied');
            } else if (response.statusCode === 404) {
                var body = JSON.parse(response.body);
                console.log('Non existing resource, error code: ' + body.error_code + ', details available in the message: ' + body.message)
            } else if (response.statusCode === 400) {
                var body = JSON.parse(response.body);
                console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
            }
        }
    }
});