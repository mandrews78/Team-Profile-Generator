//node modules
const fs = require('fs');
const inquirer = require('inquirer');

//link to page creation
const generateTeamPage = require('./src/teamPage');

//team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

//team array
const teamArray = []

//start of the manager's prompts
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name? ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID!",
      validate: ID => {
        if (isNaN(ID)) {
          console.log("Please enter the manager's ID")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email.",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the manager's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the manager's office number",
      validate: userInput => {
        if (isNaN(userInput)) {
          console.log('Please enter an office number!')
          return false;
        } else {
          return true;
        }
      }
    }
  ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    })
};

const promptEmployee = () => {
  console.log(`
  =======================
  Add employees
  =======================
  `);

  return inquirer.prompt([
    {
      type: "list",
      name: "role",
      message: "What is this employee's role?",
      choices: ["Engineer", "Intern"]
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name? ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's name!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the employee's ID:",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the employee's ID!")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the employee's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please provide the engineer's github username:",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's github username!")
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school:",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!")
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }

  ])
    .then(employeeData => {
      //data for employee types

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
      let employee = employeeData;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);

      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return promptEmployee(teamArray);
      } else {
        return teamArray;
      }
    })
};

//function to generate HTML page file using file system (fs)
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    //if there is an error
    if (err) {
      console.log(err);
      return;
      //when the profile is created
    } else {
      console.log("Your team profile has been successfully created. Please look at index.html")
    }
  })
};

addManager()
  .then(promptEmployee)
  .then(teamArray => {
    return generateTeamPage(teamArray);
  })
  .then(createHTML => {
    return writeFile(createHTML);
  })
  .catch(err => {
    console.log(err);
  });