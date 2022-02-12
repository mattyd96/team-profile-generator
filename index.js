//---------------------- Packages needed for this application -------------------------------//
//local js in utils
const createHtml = require('./src/createHtml');

//external packages
const inquirer = require('inquirer');

//node native packages
const fs = require('fs');


//---------------------- Array of questions for user input ----------------------------------//

const questions = [
    {
        type: 'input',
        message: 'What is your Project Title? ',
        name: 'title'
    },
];

//---------------------------------- write File -----------------------------------------//


const writeDoc = (fileName, data) => {
    const text = createReadme(data);

    fs.writeFile(fileName, text, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
};


//--------------------------------- Ask Questions -> enquirer -------------------------------//

inquirer.prompt(questions).then((response) => {
    console.log(response);
});