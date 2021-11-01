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
            console.log(team)
            console.log(manager)

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
            }
        })
}

function createEngineer() {

}

function createIntern() {

}

createManager()