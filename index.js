//---------------------- Packages needed for this application -------------------------------//
//local js in utils
const createHtml = require('./src/createHtml');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//external packages
const inquirer = require('inquirer');

//node native packages
const fs = require('fs');

//---------------------- Array of questions for user input ----------------------------------//
let employee;

const managerQs = [
    {
        type: 'input',
        message: `What is the Team Manager's Name? `,
        name: 'managerName'
    },
    {
        type: 'input',
        message: `What is the Team Manager's employee id? `,
        name: 'managerId'
    },
    {
        type: 'input',
        message: `What is the Team Manager's Email Address? `,
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: `What is the Team Manager's Office Number? `,
        name: 'managerOffice'
    },
    {
        type: 'list',
        message: `Would you like to add another employee or finish? `,
        name: 'create',
        choices: ['Engineer', 'Intern', "Finish"]
    },
];

const engineerQs = [
    {
        type: 'input',
        message: `What is the Engineer's Name? `,
        name: 'engineerName'
    },
    {
        type: 'input',
        message: `What is the Team Engineer's employee id? `,
        name: 'engineerId'
    },
    {
        type: 'input',
        message: `What is the Team Engineer's Email Address? `,
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: `What is the Team Engineer's Github username? `,
        name: 'engineerGithub'
    },
    {
        type: 'list',
        message: `Would you like to add another employee or finish? `,
        name: 'create',
        choices: ['Engineer', 'Intern', "Finish"]
    }
];

//---------------------------------- write File -----------------------------------------//


const writeDoc = (fileName, data) => {
    const text = createReadme(data);

    fs.writeFile(fileName, text, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
};


//--------------------------------- Ask Questions -> enquirer -------------------------------//
employee = 'engineer';

inquirer.prompt(managerQs).then((response) => {
    const {managerName, managerId, managerEmail, managerOffice} = response;
    const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
    console.log(manager);
    if(response.create !== 'Finish') {
        createAnother(response.create);
    }
});

const createAnother = employee => {
    switch (employee) {
        case 'Engineer':
            createEngineer();
            break;
        case 'Intern':
            createEngineer();
            break;
        default:
            break;
    }
};


const createEngineer = () => {
    inquirer.prompt(engineerQs).then((response) => {
        const {engineerName, engineerId, engineerEmail, engineerGithub} = response;
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        console.log(engineer);
        if(response.create !== 'Finish') {
            createAnother(response.create);
        }
    });
}