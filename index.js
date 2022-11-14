//Included packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

//Create an array of questions for user input in ReadMe file
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the Project Description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Any instructions for installing application or required packages to run application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions to use application?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute to the application?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Any instructions for tests?',
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices:['MIT','GNU','None'],
      },
];

//Function initialize app and creates readme
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const genMark = generateMarkdown(data)
        fs.writeFile("Readme.md", genMark, function(err){
            if(err){
                console.log("Unable to save file", err)
            }else{
                console.log("Successful generation of Readme.md file")
            }
        })
    })
    .catch((err) => console.error(err))
}

//Function call to initialize app
init();

