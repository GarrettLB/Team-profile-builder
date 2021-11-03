const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should extend the Employee class and create a new object with name, id, email, and school properties", () => {

            const obj = new Intern("Josh", 4, "josh@provider.com", "University of Knowledge");

            expect(obj.name).toEqual("Josh");
            expect(obj.Id).toEqual(4);
            expect(obj.email).toEqual("josh@provider.com");
            expect(obj.school).toEqual("University of Knowledge");
        })
    })

    describe("getRole", () => {
        it("returns 'Intern'", () => {

            const obj1 = new Intern("Josh", 4, "josh@provider.com", "University of Knowledge");
            
            expect(obj1.getRole()).toEqual("Intern")
        })
    })
})