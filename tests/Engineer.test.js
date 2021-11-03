const Engineer = require("../lib/Engineer")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should extend the Employee class and create a new object with name, id, email, and github properties", () => {

            const obj = new Engineer("Caleb", 3, "caleb@provider.com", "UserName");

            expect(obj.name).toEqual("Caleb");
            expect(obj.Id).toEqual(3);
            expect(obj.email).toEqual("caleb@provider.com");
            expect(obj.github).toEqual("UserName");
        })
    })

    describe("getRole", () => {
        it("returns 'Engineer'", () => {

            const obj1 = new Engineer("Caleb", 3, "caleb@provider.com", "UserName");
            
            expect(obj1.getRole()).toEqual("Engineer")
        })
    })
})