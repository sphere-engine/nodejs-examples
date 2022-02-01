var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemCode = 'EXAMPLE';
var testcaseNumber = 0;

// send request
request({
    url: 'https://' + endpoint + '/api/v3/problems/' + problemCode + '/testcases/' + testcaseNumber + '?access_token=' + accessToken,
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
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Testcase or problem not found');
            }
        }
    }
});