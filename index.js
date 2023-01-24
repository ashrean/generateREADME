// TODO: Include packages needed for this application
// requirer
const inquirer = require('inquirer');
// fs
const fs = require('fs');
const path = require('path')
// require generate markdown file .utils/etcc
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What does the user needs to know about using this repo?',
        name: 'usage',
    },
    {
        type:'input',
        message: 'What is your Github username?',
        name: 'userName',
    },
    {
        type:'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type:'input',
        message: 'What is the url of the deployed live site?',
        name: 'URL',
    },
    {
        type:'input',
        message: 'What is the url of your repo?',
        name: 'repo',
    },
    {
        type:'list',
        message: 'Please select the license you used for this project.',
        name: 'license',
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "Apace",
            "MIT",
            "Boost Software",
            "None",
        ],
    },
    {
        type:'input',
        message: 'How can someone contribute to this project?',
        name: 'contribute',
    },
    {
        type:'input',
        message: 'What command should be executed to run test?',
        name: 'testing',
        default: 'npm run test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
//put prompt here
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log('Generating your Readme File...')
            writeToFile('readme.md', generateMarkDown({ ...inquirerResponses}))
        })
}

// Function call to initialize app
init();
