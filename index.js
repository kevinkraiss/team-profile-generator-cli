import fs, { writeFile } from 'fs'
import inquirer from 'inquirer'

import {Manager} from './lib/Manager.js'
import {Engineer} from './lib/Engineer.js'
import {Intern} from './lib/Intern.js'

let employees = []

// main inquirer prompt
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter team manager name',
      name: 'manName'
    }, 
    {
      type: 'input',
      message: 'Enter team manager ID', 
      name: 'manId'
    },
    {
      type: 'input',
      message: 'Enter manager email address',
      name: 'manEmail'
    },
    {
      type: 'number',
      message: 'Enter team manager office number', 
      name: 'manOffice'
    }
  ])
  .then((data) => {
    // console.log(data)
    let manager = new Manager(data.manName, data.manId, data.manEmail, data.manOffice)
    employees.push(manager)
    choicePrompt()
  });
    
// handle choice
const choicePrompt = () => {
    return inquirer.prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Export'],
        name: 'wtd'
      }
    ])
    .then((data) => {
      if (data.wtd === 'Add an Engineer') {
        addEngineer()
      } else if (data.wtd === 'Add an Intern') {
        addIntern()
      } else {
        exportFile(employees)
      }
    })
}

const addEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'name',
      name: 'engName'
    },
    {
      type: 'input',
      message: 'id',
      name: 'engId'
    },
    {
      type: 'input',
      message: 'email',
      name: 'engEmail'
    },
    {
      type: 'input',
      message: 'github',
      name: 'engGithub'
    }
  ])
  .then((data) => {
    // console.log(data)
    let engineer = new Engineer(data.engName, data.engId, data.engEmail, data.engGithub)
    employees.push(engineer)
    choicePrompt()
  });
}

const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'name',
      name: 'intName'
    },
    {
      type: 'input',
      message: 'id',
      name: 'intId'
    },
    {
      type: 'input',
      message: 'email',
      name: 'intEmail'
    },
    {
      type: 'input',
      message: 'school',
      name: 'intSchool'
    }
  ])
  .then((data) => {
    // console.log(data)
    let intern = new Intern (data.intName, data.intId, data.intEmail, data.intSchool)
    employees.push(intern)
    choicePrompt()
  });
}

const exportFile = () => {
  console.log(employees)
  




  // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  //   err ? console.log(err) : console.log('Success!')
  // );
}



