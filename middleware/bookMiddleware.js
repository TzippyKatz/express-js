const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'requests.log');

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const time = new Date().toString();

    console.log(`a ${method} call was made`);
    const logMessage = `[${time}] ${method} ${url} - a call was made\n`;

    fs.appendFile(logFilePath, logMessage, err => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });

    next();
};

module.exports = logger;