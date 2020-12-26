const Employee = require('../lib/Employee');

// test employee object
test('creates employee object', () => {
    const employee = new Employee('Michael', 5, 'michaeldevelopscode@gmail.com');

    expect(employee.name).toBe('Michael');
    expect(employee.id).toBe(5);
    expect(employee.email).toBe("michaeldevelopscode@gmail.com");
});

// test get name
test('gets employee name', () => {
    const employee = new Employee('Michael', 5, 'michaeldevelopscode@gmail.com');

    expect(employee.getName()).toBe('Michael');
});

// test get Id
test('get employee id', () => {
    const employee = new Employee('Michael', 5, 'michaeldevelopscode@gmail.com');

    expect(employee.getId()).toBe(5);
});

// test get Email
test('get employee email', () => {
    const employee = new Employee('Michael', 5, 'michaeldevelopscode@gmail.com');

    expect(employee.getEmail()).toBe('michaeldevelopscode@gmail.com');
});

// test get Role
test('get employee role', () => {
    const employee = new Employee('Michael', 5, 'michaeldevelopscode@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});