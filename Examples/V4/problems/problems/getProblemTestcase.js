var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemId = 42;
var testcaseNumber = 0;

// send request
request({
    url: 'https://' + endpoint + '/api/v4/problems/' + problemId + '/testcases/' + testcaseNumber + '?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log(JSON.parse(response.body)); // testcase data in JSON
        }
        else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            } else if (response.statusCode === 403) {
                console.log('Access denied');
            } else if (response.statusCode === 404) {
                var body = JSON.parse(response.body);
                console.log('Non existing resource, error code: ' + body.error_code + ', details available in the message: ' + body.message)
            }
        }
    }
});