//Engineer constructor
const Engineer = require('../lib/Engineer');

test("creates an Engineer object", () => {
    const engineer = new Engineer("Henry", 1963, "henry.mccoy@xmen.com", "Beast");

    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github value", () => {
    const engineer = new Engineer("Henry", 1963, "henry.mccoy@xmen.com", "Beast");

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test("gets engineer's role", () => {
    const engineer= new Engineer("Henry", 1963, "henry.mccoy@xmen.com", "Beast");

    expect(engineer.getRole()).toEqual("Engineer");
})