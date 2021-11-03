const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should extend the Employee class and create a new object with name, id, email, and officeNumber properties", () => {

            const obj = new Manager("Mark", 2, "mark@provider.com", "770123456");

            expect(obj.name).toEqual("Mark");
            expect(obj.Id).toEqual(2);
            expect(obj.email).toEqual("mark@provider.com");
            expect(obj.officeNumber).toEqual("770123456");
        })
    })

    describe("getRole", () => {
        it("returns 'Manager'", () => {

            const obj1 = new Manager("Mark", 2, "mark@provider.com", "770123456");
            
            expect(obj1.getRole()).toEqual("Manager")
        })
    })
})