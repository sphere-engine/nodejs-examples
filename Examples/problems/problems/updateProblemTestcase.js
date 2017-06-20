var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

var problemCode = 'EXAMPLE';
var testcaseNumber = 0;

var testcaseData = {
    input: 'New input'
};

request({
    
    url: 'http://' + endpoint + '/api/v3/problems/' + problemCode +  '/testcases/' + testcaseNumber + '?access_token=' + accessToken,
    method: 'PUT',
    form: testcaseData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    if (response) {
        if (response.statusCode === 200) {
            console.log('Testcase updated');
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 400) {
                console.log('Empty code or empty name');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Testcase, problem or judge does not exist');
            }
        }
    }
});