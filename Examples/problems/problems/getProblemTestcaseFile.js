var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

var problemCode = 'EXAMPLE';
var testcaseNumber = 0;
var fileName = '<file_name>'

request({
    
    url: 'http://' + endpoint + '/api/v3/problems/' + problemCode + '/testcases/' + testcaseNumber + '/' + fileName + '?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    if (response) {
        if (response.statusCode === 200) {
            console.log(response.body); // raw data from selected file
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('File, testcase or problem not found');
            }
        }
    }
});