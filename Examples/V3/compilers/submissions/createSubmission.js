var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var submissionData = {
    language: 11,
    sourceCode: '<source_code>'
};

// send request
request({
    
    url: 'https://' + endpoint + '/api/v3/submissions?access_token=' + accessToken,
    method: 'POST',
    form: submissionData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 201) {
            console.log(JSON.parse(response.body)); // submission data in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
        }
    }
});