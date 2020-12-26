const Manager = require('../lib/Manager');

// test Manager object
test('creates manager object', () => {
    const manager = new Manager('Michael', 5, "michaeldevelopscode@gmail.com", 1);

    expect(manager.name).toBe('Michael');
    expect(manager.id).toBe(5);
    expect(manager.email).toBe("michaeldevelopscode@gmail.com");
    expect(manager.officeNumber).toBe(1);
});

test('gets the role of manager', () => {
    const manager = new Manager('Michael', 5, "michaeldevelopscode@gmail.com", 1);

    expect(manager.getRole()).toBe('Manager');
});