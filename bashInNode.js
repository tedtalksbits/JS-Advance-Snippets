/*
    ========================================
    Bash in Node.js
    ========================================
*/

const { exec } = require('child_process');
const os = require('os');

const username = os.userInfo().username;

// say hello to the user
exec(
    `say Hello ${username}, how are you today? I will now open log.txt`,
    (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    }
);

// open a file
exec('open log.txt', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
});
