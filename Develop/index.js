// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?(Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title for the project');
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is the username for the github repository?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the app!'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app?'
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What is the license for the app?',
        choices: ['MIT','Apache-2.0','EPL-1.0']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the app?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to the app?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test the app?'
    },
];

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('../README.md', fileName, err => {
            
        if (err) {
            reject(err);
            
            return;
        }

        resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
    
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(questions => {
        return generateMarkdown(questions)
    })
    .then(Readme => {
        return writeToFile(Readme)
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init()

