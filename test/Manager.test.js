const Manager = require("../lib/Manager");

describe('Manager', () => {
    it('should initialize correctly', () => {
        const manager = new Manager('Matthew', '32', 'matthew@gmail.com', '65');

        expect(manager.name).toBe('Matthew');
        expect(manager.id).toBe('32');
        expect(manager.email).toBe('matthew@gmail.com');
        expect(manager.officeNumber).toBe('65');
    });

    it('get role should return Manager', () => {
        const manager = new Manager('Matthew', '32', 'matthew@gmail.com', '65');
        expect(manager.getRole()).toBe('Manager');
    });
});