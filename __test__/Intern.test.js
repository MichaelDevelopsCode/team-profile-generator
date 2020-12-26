const Intern = require('../lib/Intern');
// test object
test('creates intern object', () => {
    const intern = new Intern('Michael', 5, 'michaeldevelopscode@gmail.com', 'UCF');

    expect(intern.name).toBe('Michael');
    expect(intern.id).toBe(5);
    expect(intern.email).toBe('michaeldevelopscode@gmail.com');
    expect(intern.school).toBe('UCF');
});
// test get school
test('gets school', () => {
    const intern = new Intern('Michael', 5, 'michaeldevelopscode@gmail.com', 'UCF');

    expect(intern.getSchool()).toBe('UCF');
});
// test get role
test('gets role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});