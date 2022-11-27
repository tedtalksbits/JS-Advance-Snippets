// create a log.txt file and append todays date and device info to it

const fs = require('fs');
const os = require('os');
const exec = require('child_process').exec;

// get todays time and date
const date = new Date();
const dateStr = date.toDateString();
const timeStr = date.toLocaleTimeString();

const dateTime = `${dateStr} - ${timeStr}`;

const deviceInfo = `Device Info: ${os.hostname()} ${os.userInfo().username}`;

const deviceInfoString = JSON.stringify(deviceInfo);

fs.appendFile('log.txt', `\n${dateTime} - ${deviceInfoString}`, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File updated successfully');

    // open the file by running bash command

    exec('open log.txt');
});
