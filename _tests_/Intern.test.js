//uses intern constructor
const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern's ID", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getEmail()).toEqual(expect.any(String));

});
test("gets intern's school", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
    const intern = new Intern("Rogue", 1983, "anna.lebeau@xmen.com", "X-Mansion");

    expect(intern.getRole()).toEqual("Intern");
})