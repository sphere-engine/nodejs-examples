var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var judgeData = {
    compilerId: 11,
    source: '<source_code>'
};

// send request
request({
    
    url: 'https://' + endpoint + '/api/v3/judges?access_token=' + accessToken,
    method: 'POST',
    form: judgeData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 201) {
            console.log(JSON.parse(response.body)); // judge data in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 400) {
                console.log('Empty source code');
            }	
            if (response.statusCode === 404) {
                console.log('Compiler does not exist');
            }
        }
    }
});