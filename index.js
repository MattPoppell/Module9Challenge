// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
 const licenseReq = require('./utils/generateMarkdown');
 const generateReadme = ({ title, description, usage, installation, tests, license, credits }) => {''};
 
 inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your application?',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Enter a description of your application:',


        },
        {
            name: 'Table Of Contents',
            type: 'confirm',
            message: 'Would you like to include a Table of Contents?',

        },
        {
            name: 'installation',
            type: 'input',
            message: 'What are the steps to install the application?',
            
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Descibe how the user operates the application:',
            
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'List your collaborators or any resource you used to create this application other than your own mind:',
            
        },
        {
            name: 'tests',
            type: 'input',
            message: 'Describe tests used to debug the application:',


        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter a valid email address:',


        },
       
    ])
    .then((data) => {
                console.log(data);

                const filename = `${data.title.split(' ').join('')}.md`;
                let markDown= `
                # ${data.title}

                ## Description
                ${data.description}
                
                ## Usage
                ${data.usage}
                
                ## Installation
                ${data.installation}


                ## Tests
                ${data.tests}

                ## Credits
                ${data.contributing}
                
                ## Questions
                Any further questions may be directed to ${data.email}`
    

                fs.writeFile(filename, markDown, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            });








// // TODO: Create an array of questions for user input
// const questions = [done];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {done}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
