var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var submissionId = 1;
var stream = 'source'

// send request
request({
    url: 'https://' + endpoint + '/api/v4/submissions/' + submissionId + '/' + stream + '?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log(response.body); // raw data from selected stream
        } else {
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