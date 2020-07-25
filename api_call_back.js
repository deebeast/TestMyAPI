var http = require('follow-redirects').http;
var logger = require("./logging").logger;
var configurations = require("./configurations/configurations.json")

var api_call_back = function () {
    var log_helper = function (prefix, content, type) {
        if (configurations.logs.logging_enabled_for.find(current_type => current_type == type)) {
            if (configurations.logs.logging_type == "file") logger.info(`${prefix}: ${content}`);
            else console.info(`${prefix}: ${content}`);
        }
    };

    var options = configurations.api_details.options;

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            log_helper("Response", body.toString(), "response");
        });

        res.on("error", function (error) {
            log_helper("Error", error, "response");
            log_helper("Error", body.toString(), "response");
        });
    });

    log_helper("Request", JSON.stringify(options), "request");

    if (configurations.api_details.payload) {
        var payload = JSON.stringify(configurations.api_details.payload);
        log_helper("Payload", payload, "payload");
        req.write(payload);
    }

    req.end();

}

exports.api_call_back = api_call_back;