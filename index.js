const fs = require('fs')
const inq = require('inquirer')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const team = []

function createManager() {
    inq
        .prompt([
            {
                type: "input",
                message: "Enter Team Manager's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter Team Manager's ID number.",
                name: "ID",
            },
            {
                type: "input",
                message: "Enter Team Manager's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Enter Team Manager's office phone number.",
                name: "phoneNumber",
            },   
        ])
    
        .then(data => {
            const {name, ID, email, phoneNumber} = data

            const manager = new Manager(name, ID, email, phoneNumber)
            team.push(manager)

            teamQuestion()
        })
}

function teamQuestion() {
    inq
        .prompt([
            {
                type: "list",
                message: "What would you like to add to your team next?",
                name: "addteam",
                choices: ["Engineer", "Intern", "Nothing"]
            }
        ])

        .then(data => {
            if (data.addteam === "Engineer") {
                createEngineer()
            } else if (data.addteam === "Intern") {
                createIntern()
            } else {
                console.log("Team finished.")
                console.log(team)
            }
        })
}

function createEngineer() {
    inq
        .prompt([
            {
                type: "input",
                message: "Enter Engineer's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter Engineer's ID number.",
                name: "ID",
            },
            {
                type: "input",
                message: "Enter Engineer's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Enter Engineer's GitHub username.",
                name: "github",
            },   
        ])
    
        .then(data => {
            const {name, ID, email, github} = data

            const engineer = new Engineer(name, ID, email, github)
            team.push(engineer)

            teamQuestion()
        })
}

function createIntern() {
    inq
        .prompt([
            {
                type: "input",
                message: "Enter Intern's name.",
                name: "name",
            },
            {
                type: "input",
                message: "Enter Intern's ID number.",
                name: "ID",
            },
            {
                type: "input",
                message: "Enter Intern's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Enter Intern's school name.",
                name: "school",
            },   
        ])
    
        .then(data => {
            const {name, ID, email, school} = data

            const intern = new Intern(name, ID, email, school)
            team.push(intern)

            teamQuestion()
        })
}

createManager()