const Engineer = require('../lib/Engineer');

// test engineer object
test('creates engineer object', () => {
    const engineer = new Engineer('Michael', 5, 'michaeldevelopscode@gmail.com', 'MichaelDevelopsCode');

    expect(engineer.name).toBe('Michael');
    expect(engineer.id).toBe(5);
    expect(engineer.email).toBe('michaeldevelopscode@gmail.com');
    expect(engineer.github).toBe('MichaelDevelopsCode');
});
// test get github
test('get github', () => {
    const engineer = new Engineer('Michael', 5, 'michaeldevelopscode@gmail.com', 'MichaelDevelopsCode');

    expect(engineer.getGithub()).toBe('MichaelDevelopsCode');
});

// test get role
test('get role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});

