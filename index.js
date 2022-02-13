//---------------------- Packages needed for this application -------------------------------//
//local js in utils
const createHtml = require('./src/createHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//external packages
const inquirer = require('inquirer');

//node native packages
const fs = require('fs');


//---------------------------------- Global Variables ---------------------------------------//

const employees = [];


//---------------------------------- write File ---------------------------------------------//


const writeDoc = (fileName, data) => {
    const text = createHtml(data);

    fs.writeFile(fileName, text, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
};


//--------------------------------- Ask Questions -> enquirer -------------------------------//

const createManager = response => {
    const {name, id, email, office, create} = response;
    const manager = new Manager(name, id, email, office);
    employees.push(manager);
    createAnotherOrFinish(create);
}

const createEngineer = response => {
    const {name, id, email, github, create} = response;
    const engineer = new Engineer(name, id, email, github);
    employees.push(engineer);
    createAnotherOrFinish(create);
}

const createIntern = response => {
    const {name, id, email, school, create} = response;
    const intern = new Intern(name, id, email, school);
    employees.push(intern);
    createAnotherOrFinish(create);
}

const createAnotherOrFinish = answer => {
    if(answer !== 'Finish') {
        askAndCreate(answer.toLowerCase());
    } else {
        writeDoc('./dist/index.html', employees)
    }
}

const verifyEmail = input => {
    return new Promise((resolve, reject) => {
        input.includes('@') ? resolve(true) : reject('Please enter a valid email.');
    });
}

const checkUnique = input => {
    return new Promise((resolve, reject) => {
        for(const employee of employees) {
            if(input === employee.id) {
                reject('This id already exists in your group.');
            }
        }
        resolve(true);
    });
}

const askAndCreate = employee => {

    const Qs = [
        {
            type: 'input',
            message: `What is the Team Manager's Name? `,
            name: 'name',
            when: () => {return employee === 'manager'}
        },
        {
            type: 'input',
            message: `What is their Name? `,
            name: 'name',
            when: () => {return employee !== 'manager'}
        },
        {
            type: 'input',
            message: `What is their employee id? `,
            name: 'id',
            validate: (id) => {return checkUnique(id)}
        },
        {
            type: 'input',
            message: `What is their Email Address? `,
            name: 'email',
            validate: (email) => {return verifyEmail(email)}
        },
        {
            type: 'input',
            message: `What is their Office Number? `,
            name: 'office',
            when: () => {return employee === 'manager'}
        },
        {
            type: 'input',
            message: `What is their Github username? `,
            name: 'github',
            when: () => {return employee === 'engineer'}
        },
        {
            type: 'input',
            message: `What is their School Name? `,
            name: 'school',
            when: () => {return employee === 'intern'}
        },
        {
            type: 'list',
            message: `Would you like to add another employee or finish? `,
            name: 'create',
            choices: ['Engineer', 'Intern', "Finish"]
        },
    ];

    inquirer.prompt(Qs).then((response) => {

        switch (employee) {
            case 'manager':
                createManager(response);
                break;
            case 'engineer':
                createEngineer(response);
                break;
            case 'intern':
                createIntern(response);
                break;
            default:
                break;
        }
    });
};

const init = () => {
    askAndCreate('manager');
}

init();