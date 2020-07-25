var winston = require('winston');
require('winston-daily-rotate-file');

var configurations = require("./configurations/configurations.json")

//define custom log format
const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
        info => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

var transport = new winston.transports.DailyRotateFile({
    //change log file name
    filename: `${configurations.logs.path}/${configurations.logs.file_name}`,
    datePattern: `${configurations.logs.date_pattern}`,
    zippedArchive: `${configurations.logs.zipped_archive}`,
    maxSize: `${configurations.logs.max_file_size}`,
    maxFiles: `${configurations.logs.max_files}`
});

transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

var logger = winston.createLogger({
    format: logFormat,
    transports: [
        transport
    ]
});

exports.logger = logger;