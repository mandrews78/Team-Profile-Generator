//uses manager constructor
const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@xmen.com", 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@xmen.com", 1);

    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's ID", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@xmen.com", 1);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@xmen.com", 1);

    expect(manager.getEmail()).toEqual(expect.any(String));

});

test("gets Manager's role", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@xmen.com", 1);

    expect(manager.getRole()).toEqual("Manager");
});