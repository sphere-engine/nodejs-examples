var request = require('request');

// define access parameters
var accessToken = '<access_token>';
var endpoint = '<endpoint>';

// define request parameters
var judgeId = 1;
var judgeData = {
    compilerId: 11,
    source: '<source_code>'
};

// send request
request({
    url: 'https://' + endpoint + '/api/v3/judges/' + judgeId +  '?access_token=' + accessToken,
    method: 'PUT',
    form: judgeData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 200) {
            console.log('Judge updated');
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 400) {
                console.log('Empty source code');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Judge or compiler does not exist');
            }
        }
    }
});