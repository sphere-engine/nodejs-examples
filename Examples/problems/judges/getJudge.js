var request = require('request');

var accessToken = '<access_token>';
var endpoint = '<endpoint>';

var judgeId = 1;

request({
    
    url: 'http://' + endpoint + '/api/v3/judges/' + judgeId + '?access_token=' + accessToken,
    method: 'GET'
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    if (response) {
        if (response.statusCode === 200) {
            console.log(JSON.parse(response.body)); // judge data in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            }
            if (response.statusCode === 403) {
                console.log('Access denied');
            }
            if (response.statusCode === 404) {
                console.log('Submision not found');
            }
        }
    }
});