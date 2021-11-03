const fs = require('fs')
const inq = require('inquirer') 
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const team = []
const teamCards = []

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

            menu()
        })
}

function menu() {
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
            } else if (data.addteam === "Nothing") {
                console.log("Team finished.")

                teamLoop(team)
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

            menu()
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

            menu()
        })
}

function managerCard(i) {
    const {name, Id, email, officeNumber} = i

    let html = 
`<div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${name}<br/><br/>Manager 
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${Id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}" target="_blank">${email}</a></li>
                  <li class="list-group-item">Office number: ${officeNumber}</li>
                </ul>
            </div>
          </div>`



  teamCards.push(html)
}

function engineerCard(i) {
    const {name, Id, email, github} = i
    
    let html = 
    
`       
          <div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${name}<br/><br/>Engineer 
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${Id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}" target="_blank">${email}</a></li>
                </ul>
                <div class="card-body">
                  <a href="https://github.com/${github}" class="card-link" target="_blank">GitHub</a>
                </div>
            </div>
          </div>`

  teamCards.push(html)
}

function internCard(i) {
    const {name, Id, email, school} = i
    
    let html = 
`       
          <div class = "col-4">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${name}<br/><br/>Intern 
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${Id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}" target="_blank">${email}</a></li>
                  <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
          </div>`

  teamCards.push(html)
}

function teamLoop(team) {
    for (let i of team) {
        if (i.getRole() === "Manager") {
            managerCard(i)
        } else if (i.getRole() === "Engineer") {
            engineerCard(i)
        } else if (i.getRole() === "Intern") {
            internCard(i)
        }
    }

    generateHtml(teamCards)
}

function generateHtml(cards) {
    let employeeCards = ''

    for (let i of cards) {
        employeeCards += i
    }

    let html = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
          ${employeeCards}
        </div>
    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`

    fs.writeFile("./dist/generated.html", html, (err) => {
        err ? console.error(err) : console.log('Success!')})
}

createManager()