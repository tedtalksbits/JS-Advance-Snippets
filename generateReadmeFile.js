/*
    ========================================
    Generate Readme File for Github
    ========================================
*/

// create a README.md file in the specified directory

const fs = require('fs');
const path = require('path');

const dir = process.argv[2] || process.cwd();
const title = process.argv[3] || '';

const readmeFile = path.join(dir, 'README.md');

const readmeContent = `# 💡${title}💡 \r 
\r
This directory contains code snippets for the following topics: \r
\r
- [Function Currying in JavaScript 🪆](./currying.js) \r
- [Bash in Node.js 🤖](./bashInNode.js) \r
- [Generate Readme File for Github 📝](./generateReadmeFile.js) \r
- [Main.js -  More fun with JS 🤪 ](./main.js) \r
- [Readline Module - Node.js 🔖](./readline.js) \r
- [Scopes 🫙](./scopes.js) \r
- [Closure ⏎](./closure.js) \r
- [This Keyword 🤷🏿](./thisKeyword.js) \r
- [Prototype in Javascript 👨‍👩‍👧](./prototype.js) \r


Tedane Blake &copy; ${new Date().getFullYear()}

## Contact Info 👋🏿

- [LinkedIn](https://www.linkedin.com/in/tedane-blake-5b1b4b1b3/)
- [Twitter](https://twitter.com/tedaneblake)
- [Github](https://github.com/tedtalksbits)


## How to use generateReadmeFile.js 🏋🏽‍♀️

- Open the terminal
- Navigate to the directory containing generateReadmeFile.js
- Run the following command: node generateReadmeFile.js <directory name> <title>(optional)
- The README.md file will be created in the specified directory
- The README.md file will contain a list of all the code snippets in the specified directory, you can edit the README.md file to your liking
`;

fs.writeFile(readmeFile, readmeContent, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File created successfully');
});

// run the script by passing the directory name as an argument
// e.g - node generateReadmeFile.js snippets
