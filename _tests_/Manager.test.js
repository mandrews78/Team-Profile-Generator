// Manager constructor
const { default: test } = require('node:test');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const Manager = require('../lib/Manager');

test("creates a Manager object", () => {
    const manager = new Manager("Professor X", 1963, "charles.xavier@x-men.com", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets Manager's role", () => {
    const manager= new Manager("Professor X", 1963, "charles.xavier@x-men.com", 1);

    expect(manager.getRole()).toEqual("Manager");
})