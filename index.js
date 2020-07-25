var api_call_back = require('./api_call_back').api_call_back;
var configurations = require("./configurations/configurations.json")

/**
 * set interval == token expiry time
 * 
 * concurrent request interval
 */

setInterval(api_call_back, configurations.load_parameters.concurrent_request_interval);