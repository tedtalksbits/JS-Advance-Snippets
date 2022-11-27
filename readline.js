/*
    ========================================
    Readline Module - Node.js
    ========================================

    The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your name? ', function (answer) {
    console.log('Hi ' + answer + ', nice to meet you!');
    rl.close();
});
