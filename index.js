// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// const questions = [
function userInput(){
  return inquirer.prompt([
    {
      type: 'input',
      name: 'fileName',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What sections entitled Description?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do I install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use this application?',
    },
    {
      type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT','ISC','Apache license 2.0',"Mozilla Public License 2.0",'none']
     },
     {
      type: 'input',
      name: 'contribution',
      message: 'How do I contribute to this application?', 
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How do I test this application?',
      
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your e-mail?',
    },
    
  ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, 
  (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}



// TODO: Create a function to initialize app
async function init() {
  let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();
