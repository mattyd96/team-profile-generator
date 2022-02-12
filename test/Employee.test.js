const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("should initialize correctly", () => {
        const employee = new Employee('Matthew', '32', 'matthew@gmail.com');

        expect(employee.name).toBe('Matthew');
        expect(employee.id).toBe('32');
        expect(employee.email).toBe('matthew@gmail.com');
    });
});
