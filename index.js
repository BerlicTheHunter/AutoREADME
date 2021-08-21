// TODO: Include packages needed for this application
const inquirer= require('inquirer');
const generateMarkdown= require('./utils/generateMarkdown.js');
const fs= require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type:'input',
    message: 'What is the title of the project',
    name: 'title',
  },
  {
    type:'input',
    message: 'In a short paragraph, please describe the project',
    name: 'description',
  },
  {
    type:'input',
    message: 'Please provide installation instructions',
    name: 'installation',
  },
  {
    type:'input',
    message: 'Please provide usage summary',
    name: 'usage',
  },
  {
    type:'list',
    message: 'What license is used with this project',
    name: 'license',
    choices: ["None","MIT License","Apache License 2.0","Mozilla Public License 2.0",],
  },
  {
    type:'input',
    message: 'Please provide contribution instructions',
    name: 'contributing',
  },
  {
    type:'input',
    message: 'Please provide test cases',
    name: 'tests',
  },
  {
    type:'input',
    message: 'What is your email address',
    name: 'email',
  },
  {
    type:'input',
    message: 'What is your GitHub username',
    name: 'username',
  },
  {
    type:'input',
    message: 'Where is this project deployed, (please provide live address)',
    name: 'liveLink',
  },
  { 
    type:'input',
    message: 'What would you like to name your README file? (do not include file extensions)',
    name: 'fileName',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName,data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('File Successfully Writen!'));
};

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) =>{
    console.log(answers);
    const readMe=generateMarkdown(answers);
    writeToFile(answers.fileName,readMe);
    console.log("Thanks for using AUTOREADME; additional sections can now be added manually")
  })  
};

// Function call to initialize app
init();
