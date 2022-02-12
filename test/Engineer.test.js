const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('should initialize correctly', () => {
        const engineer = new Engineer('Matthew', '32', 'matthew@gmail.com', 'mattyd96');

        expect(engineer.name).toBe('Matthew');
        expect(engineer.id).toBe('32');
        expect(engineer.email).toBe('matthew@gmail.com');
        expect(engineer.github).toBe('mattyd96');
    });

    it('get role should return Engineer', () => {
        const manager = new Engineer('Matthew', '32', 'matthew@gmail.com', '65');
        expect(manager.getRole()).toBe('Engineer');
    });
});