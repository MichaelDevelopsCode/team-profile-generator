const { writeFile, copyFile } = require('./utils/generate-site');

const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

let 
// prompts
function promptManager() {
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
    ])
        // Create manager Object with input data
        .then((managerData) => {
            addManager(managerData);
        });
};

function promptMenu() {
    return inquirer.prompt({
        type: "list",
        name: "menu",
        message: 'Main menu',
        choices: [
            "Add Engineer",
            "Add Intern",
            new inquirer.Separator(),
            "Finish building"
        ]
    }).then(choice => {
        if (choice.menu === "Add Engineer") {
            promptEngineer();
        } else if (choice.menu === "Add Intern") {
            promptIntern();
        } else {
            finish();
        }
    });
};

function promptEngineer() {
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
    ])
        // Create engineer Object with input data
        .then(engineerData => { 
            addEngineer(engineerData) 
        });
};

function promptIntern() {
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
            name: 'name',
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
    ])
        // create intern object
        .then(internData => {
            addIntern(internData); 
        });
};

function addManager(managerData) {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
    console.log("Manager " + managerData.name + " is added to team!");
    promptMenu(); // go to menu
}

function addEngineer(engineerData) {
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

    console.log(engineer);
    console.log("Engineer " + engineerData.name + " is added to team!");
    promptMenu(); // return to menu
};

function addIntern(internData) {
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

    console.log(intern);
    console.log("Intern " + internData.name + " is added to team!");
    promptMenu(); // return to menu
};

function finish() {
    console.log("Team is complete, open html to see!");
}


promptManager();