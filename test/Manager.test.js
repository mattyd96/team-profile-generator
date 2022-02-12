const Manager = require("../lib/Manager");

describe('Manager', () => {
    const manager = new Manager('Matthew', '32', 'matthew@gmail.com', '65');

    it('should initialize correctly', () => {
        expect(manager.name).toBe('Matthew');
        expect(manager.id).toBe('32');
        expect(manager.email).toBe('matthew@gmail.com');
        expect(manager.officeNumber).toBe('65');
    });

    it('get role should return Manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});