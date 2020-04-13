'use strict';
const fs = require('fs');
const winston = require('winston');


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});
let rawdata = fs.readFileSync('assets/manifests/dummy.json');
let fruits = JSON.parse(rawdata);
console.log(fruits);
logger.info(fruits);