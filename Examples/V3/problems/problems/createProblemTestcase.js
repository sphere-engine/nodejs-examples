var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemCode = 'EXAMPLE';
var testcaseData = {
    input: 'Input',
    output: 'Output',
    timelimit: 5,
    judgeId: 1
};

// send request
request({
    url: 'https://' + endpoint + '/api/v3/problems/' + problemCode +  '/testcases?access_token=' + accessToken,
    method: 'POST',
    form: testcaseData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 201) {
            console.log(JSON.parse(response.body)); // testcase data in JSON
        }
        else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 400) {
                console.log('Maximum number of test cases reached or timelimit is invalid');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Problem or judge does not exist');
            }
            if (response.statusCode === 409) {
                console.log('Many test cases added at the same time ');
            }
        }
    }
});