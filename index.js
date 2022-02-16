//---------------------- Packages needed for this application -------------------------------//
//local js in utils and src
const createHtml = require('./src/createHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//external packages
const inquirer = require('inquirer');

//node native packages
const fs = require('fs');


//---------------------------------- Global Variables ---------------------------------------//

//employee array to hold all employee instances (Manager, Engineer, Intern)
const employees = [];


//---------------------------------- write File ---------------------------------------------//

//write the html file
const writeDoc = (fileName, data) => {
    const text = createHtml(data);

    fs.writeFile(fileName, text, (err) =>
        err ? console.error(err) : console.log('\nHTML Generated!')
    );
};


//--------------------------------- Employee Creator Functions -------------------------------//

//create a manager instance
const createManager = response => {
    const {name, id, email, office, create} = response;
    const manager = new Manager(name, id, email, office);
    employees.push(manager);
    createAnotherOrFinish(create);
};

//create an engineer instance
const createEngineer = response => {
    const {name, id, email, github, create} = response;
    const engineer = new Engineer(name, id, email, github);
    employees.push(engineer);
    createAnotherOrFinish(create);
};

//create Intern instance
const createIntern = response => {
    const {name, id, email, school, create} = response;
    const intern = new Intern(name, id, email, school);
    employees.push(intern);
    createAnotherOrFinish(create);
};

//handles weather or not to add another employee or finish and create the html
const createAnotherOrFinish = answer => {
    if(answer !== 'Finish') {
        askAndCreate(answer.toLowerCase());
    } else {
        writeDoc('./dist/index.html', employees)
    }
};

//--------------------------------- Inquirer Validation Functions -------------------------------//

//verify it is a valid email string -> very basic check
const verifyEmail = input => {
    return new Promise((resolve, reject) => {
        (input.includes('@') && input[0] !== '@' && input[input.length-1] !== '@') ? 
            resolve(true) : reject('Please enter a valid email.');
    });
};

//check to see if id entered is unique -> doesn't match any existing employee id
const checkUnique = input => {
    return new Promise((resolve, reject) => {
        for(const employee of employees) {
            if(input === employee.id) {
                reject('This id already exists in your group. Please use a unique one.');
            }
        }
        resolve(true);
    });
};

//check to make sure there are no spaces in github username
const checkUrlFriendly = input => {
    return new Promise((resolve, reject) => {
        input.includes(' ') ? reject('Please enter the username without spaces.') 
                            : resolve(true);
    });
};

//--------------------------------- Enquirer -> main loop -------------------------------//

//handles the enquirer interface and delegation of response processing
const askAndCreate = employee => {

    //question array
    const Qs = [
        {
            type: 'input',
            message: `What is the ${employee}'s Name? `,
            name: 'name',
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
            when: () => {return employee === 'engineer'},
            validate: (github) => {return checkUrlFriendly(github)}
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

    //get user input and create appropriate employee
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

//--------------------------------- Init -------------------------------//

const init = () => {
    askAndCreate('manager');
}

init();