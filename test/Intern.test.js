const Intern = require("../lib/Intern");

describe('Intern', () => {
    const intern = new Intern('Matthew', '32', 'matthew@gmail.com', 'University of Adelaide');

    it('should initialize correctly', () => {
        expect(intern.name).toBe('Matthew');
        expect(intern.id).toBe('32');
        expect(intern.email).toBe('matthew@gmail.com');
        expect(intern.school).toBe('University of Adelaide');
    });

    it('get role should return Intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });

    it('get school should return "University of Adelaide"', () => {
        expect(intern.getSchool()).toBe('University of Adelaide');
    });
});