// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// requiring page where README is developed
const generatePage = require('./generateMarkdown.js');
// Creates an array of questions for user input
const questions = () => {
    // Gives the user the initial prompt.
    return inquirer.prompt([
        {
        // Asks the user what they want the title of their README is.
        type: 'input',
        name: 'title',
        message: 'What would you like your README title to be?'
    },
    {
        // Asks the user what they want their README description to be.
        type: 'input',
        name: 'description',
        message: 'What would you like your README description to be?'
    },
    {
        // Asks the user how to install the application
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        // Asks to describe to the user how they can use the application
        type: 'input',
        name: 'usage',
        message: 'How does the user use this application?'
    },
    {
        // Tells the user how they can contribute and the guidelines to contribute
        type: 'input',
        name: 'contribution',
        message: 'How can the user contribute to the application if they want to and what are your contribution guidelines?'
    },
    {
        // Tells the user what to run to test the app
        type: 'input',
        name: 'test',
        message: 'How should the user test this application?'
    },
    {
        // Asks the user what license they want to use from a list of different licenses
        type: 'list',
        name: 'license',
        message: 'Which license would you like your project to have? (The most straight-forward license is MIT)',
        choices: ['MIT', 'Apache', 'CC']
    },
    {
        // Asks the user their username
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (For contacting purposes)'
    },
    {
        // Asks the user for their email
        type: 'input',
        name: 'email',
        message: 'What is your email? (Also for contacting purposes)'
    }
]) 
};

// This writeFile function writes the user data and catches any errors
const writeFile= data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Your README has been generated!")
        }
    });
}


// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }



// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

// This goes through the questions function and initializes the app
questions()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
});
