const { writeFile, copyFile } = require('../src/generate-site');
const generatePage = require('../src/page-template'); // grab function from page-template
const inquirer = require('inquirer');
const menu = require('inquirer-menu');

const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

let managers = [];
let engineers = [];
let interns = [];

// prompts
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Team Manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Team Manager's ID:",
            validate: idInput => {
                if (idInput) {
                    if (isNaN(idInput)){
                        console.log("Please enter number only");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter Team Manager's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Team Manager's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter office number:",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    if (isNaN(officeNumberInput)){
                        console.log("Please enter number only");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter an office number");
                    return false;
                }
            }
        }
    ]);
};

function promptMenu() {
    return {
        type: "list",
        name: "menu",
        message: 'Main menu',
        choices: {
            "Add Engineer": promptEngineer,
            "Add Intern": promptIntern,
        }
    };
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Engineer's ID:",
            validate: idInput => {
                if (idInput) {
                    if (isNaN(idInput)){
                        console.log("Please enter number only");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter Engineer's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Engineer's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter Engineer's github:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter engineer's github");
                    return false;
                }
            }
        }
    ]).then(addEngineer); // add eneginer object
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter Intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Intern's ID:",
            validate: idInput => {
                if (idInput) {
                    if (isNaN(idInput)){
                        console.log("Please enter number only");
                        return false;
                    }
                    return true;
                } else {
                    console.log("Please enter Intern's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter Intern's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Intern's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter intern's school");
                    return false;
                }
            }
        }
    ]).then(addIntern); //add to intern object
};

const addManager = (managerData) => {
    // create manager object
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    // send to team data array
    managers.push(manager);
    // completed message
    console.log("Manager " + managerData.name + " is added to team!");
};

const addEngineer = (engineerData) => {
    // create engineer object
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
    // send to team data array
    engineers.push(engineer);
    //completed message
    console.log("Engineer " + engineerData.name + " is added to team!");

    return;
};

const addIntern = (internData) => {
    // create intern object
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
    // send to team data array
    interns.push(intern);
    // completed message
    console.log("Intern " + internData.name + " is added to team!");

    return;
};

promptManager()
    // Create manager Object with input data
    .then((managerData) => {
        addManager(managerData);
    })
    // go to menu
    .then(() => {
        menu(promptMenu)
            .then(() => {
                return generatePage(managers, engineers, interns);
            })
            .then(pageHTML => {
                return writeFile(pageHTML);
            })
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse);
                console.log("Team is complete, open html to see!");
            })
            .catch(err => {
                console.log(err);
            });
    })