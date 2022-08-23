//link to page creation
const generatePage = require('./src/generatePage');

//node modules
const fs = require('fs');
const iquirer = require('inquirer');

//team profiles
const Employee = require('.lib/Employee');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Intern');
const Manager = require('./lib/Manager');
const { default: inquirer } = require('inquirer');

//team array
const teamArray = []

//start of the manager's prompts
const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the team manager's name? ",
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log("Please enter the manager's name.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "Please enter the manager's ID!",
      validate: nameInput => {
        if (isNAN(nameInput)) {
          console.log("Please enter the manager's ID")
          return false;
        }else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the manager's email.",
      validate: emailInput => {
        if (emailInput){
          return true;
        }else {
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
        }else {
          return true;
        }
      }
    }


  ]

  )
}

