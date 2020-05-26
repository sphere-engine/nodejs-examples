var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemCode = 'EXAMPLE';
var problemData = {
    name: 'New name'
};

// send request
request({
    
    url: 'https://' + endpoint + '/api/v3/problems/' + problemCode +  '?access_token=' + accessToken,
    method: 'PUT',
    form: problemData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log('Problem updated');
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
                console.log('Problem or masterjudge does not exist');
            }
        }
    }
});