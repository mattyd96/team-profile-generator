const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should initialize correctly', () => {
        const intern = new Intern('Matthew', '32', 'matthew@gmail.com', 'University of Adelaide');

        expect(intern.name).toBe('Matthew');
        expect(intern.id).toBe('32');
        expect(intern.email).toBe('matthew@gmail.com');
        expect(intern.school).toBe('University of Adelaide');
    });

    it('get role should return Intern', () => {
        const intern = new Intern('Matthew', '32', 'matthew@gmail.com', '65');
        expect(intern.getRole()).toBe('Intern');
    });
});