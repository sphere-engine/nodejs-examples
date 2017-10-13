var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var problemData = {
    name: 'Example',
    code: 'EXAMPLE'
};

// send request
request({
    
    url: 'http://' + endpoint + '/api/v3/problems?access_token=' + accessToken,
    method: 'POST',
    form: problemData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 201) {
            console.log(JSON.parse(response.body)); // problem data in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 400) {
                console.log('Empty name, empty code, not unique code or invalid code');
            }
            if (response.statusCode === 404) {
                console.log('Masterjudge does not exist');
            }
        }
    }
});