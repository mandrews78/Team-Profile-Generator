const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee("Michael", 1911, "michael.andrews@email.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
    const employee = new Employee("Michael", 1911, "michael.andrews@email.com");

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's ID", () => {
    const employee = new Employee("Michael", 1911, "michael.andrews@email.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email", () => {
    const employee = new Employee("Michael", 1911, "michael.andrews@email.com");

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets employee's role", () => {
    const employee = new Employee("Michael", 1911, "michael.andrews@email.com");

    expect(employee.getRole()).toEqual("Employee");
});