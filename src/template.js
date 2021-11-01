const fs = require("fs")

function teamHTML(team) {
    for (let i = 0;i < team.length; i++) {
        if (i.getRole() === "Manager") {
            console.log("i is a Manager")
        }
    }
}
