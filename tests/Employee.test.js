const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new object with name, id, and email properties", () => {

            const obj = new Employee("Chris", 1, "chris@provider.com");

            expect(obj.name).toEqual("Chris");
            expect(obj.Id).toEqual(1);
            expect(obj.email).toEqual("chris@provider.com");
        })
    })

    describe("getName", () => {
        it("retrieves value from name property", () => {

            const obj1 = new Employee("Chris", 1, "chris@provider.com");
            
            expect(obj1.getName).toEqual("Chris")
        })
    })

    describe("getId", () => {
        it("retrieves Id from name property", () => {

            const obj2 = new Employee("Chris", 1, "chris@provider.com");
            
            expect(obj2.getId).toEqual(1)
        })
    })

    describe("getRole", () => {
        it("returns 'Employee'", () => {

            const obj3 = new Employee("Chris", 1, "chris@provider.com");
            
            expect(obj3.getRole).toEqual("Employee")
        })
    })
})