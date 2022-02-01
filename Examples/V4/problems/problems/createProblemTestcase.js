var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemId = 42;
var testcaseData = {
    input: 'Input',
    output: 'Output',
    timelimit: 5,
    judgeId: 1
};

// send request
request({
    url: 'https://' + endpoint + '/api/v4/problems/' + problemId +  '/testcases?access_token=' + accessToken,
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
            } else if (response.statusCode === 403) {
                console.log('Access denied');
            } else if (response.statusCode === 404) {
                console.log('Problem does not exist');
            } else if (response.statusCode === 400) {
                var body = JSON.parse(response.body);
                console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
            }
        }
    }
});