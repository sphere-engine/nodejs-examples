var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemId = 42;

// send request
request({
    url: 'https://' + endpoint + '/api/v4/problems/' + problemId + '?access_token=' + accessToken,
    method: 'DELETE'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log('Problem deleted');
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            } else if (response.statusCode === 403) {
                console.log('Access denied');
            } else if (response.statusCode === 404) {
                console.log('Problem not found');
            }
        }
    }
});