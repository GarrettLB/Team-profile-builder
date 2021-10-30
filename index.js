const fs = require('fs')
const inq = require('inquirer')

const managerQuestions = [
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
]

function createManager() {
    inq.prompt(managerQuestions).then(data => {
        const {name, ID, email, phoneNumber} = data

        addEmployee(name, ID, email, phoneNumber)
    })
}

function createEmployee() {
    again = true

    const employeeType = [
        {
            type: "list",
            message: "What type of employee do you want to add?",
            name: "name",
            choices: ["Engineer", "Intern", "None"],
        },
    ]

    while (again) {
        inq.prompt().then()
    }

}