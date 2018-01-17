var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var submissionData = {
    problemCode: 'EXAMPLE',
    compilerId: 11,
    source: '<source_code>'
};

// send request
request({
    
    url: 'http://' + endpoint + '/api/v3/submissions?access_token=' + accessToken,
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
            if (response.statusCode === 400) {
                console.log('Empty source code');
            }
            if (response.statusCode === 404) {
                console.log('Problem, compiler or user does not exist');
            }
        }
    }
});