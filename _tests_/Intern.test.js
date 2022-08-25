//Intern constructor
const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's school", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern= new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getRole()).toEqual("Intern");
})