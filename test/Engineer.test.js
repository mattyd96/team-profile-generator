const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    const engineer = new Engineer('Matthew', '32', 'matthew@gmail.com', 'mattyd96');

    it('should initialize correctly', () => {
        //const engineer = new Engineer('Matthew', '32', 'matthew@gmail.com', 'mattyd96');

        expect(engineer.name).toBe('Matthew');
        expect(engineer.id).toBe('32');
        expect(engineer.email).toBe('matthew@gmail.com');
        expect(engineer.github).toBe('mattyd96');
    });

    it('get role should return Engineer', () => {
        //const engineer = new Engineer('Matthew', '32', 'matthew@gmail.com', '65');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('get github should return mattyd96', () => {
        //const engineer = new Engineer('Matthew', '32', 'matthew@gmail.com', '65');
        expect(engineer.getGithub()).toBe('mattyd96');
    });
});