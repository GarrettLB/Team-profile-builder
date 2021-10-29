const fs = require('fs')
const inq = require('inquirer')

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    }
]

inq
    .prompt(questions).then(data => {
        const {blank} = data

        if(blank) {
            console.log("Please fill out all questions! To try again run the program again")
            return
        }

        const HTML = ``


        fs.writeFile('generated.html', HTML, (err) =>
        err ? console.error(err) : console.log('No errors'))
    })