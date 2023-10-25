// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter project title.",
    },
    {
        type:"input",
        name: "description",
        message:"Please provide short description explaining the purpose of this project.",
    },
    {
        type:"input",
        name: "installation",
        message:"Please provide steps required to install this project.",
    },
    {
        type:"input",
        name: "usage",
        message:"Please provide instructions and examples for use",
    },
    {
        type:"checkbox",
        name: "license",
        message:"Please select license for the project.",
        choices: ["None", "Apache License 2.0", "MIT License", "GNU General Public License v3.0"],
    },
    {
        type:"input",
        name: "contributing",
        message:"Please enter contribution guidelines. ",
    },
    {
        type:"input",
        name: "tests",
        message:"Please enter instructions on how to test this project.",
    },
    {
        type:"input",
        name: "username",
        message:"Enter GitHub username so others can reach you for questions.",
    },
    {
        type:"input",
        name: "email",
        message:"Enter your email for another way to reach you for questions.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>{
    console.log("Creating Professional README.md File..");
    writeToFile("./README.md", generateMarkdown({...responses}));
    });
}
// Function call to initialize app
init();
