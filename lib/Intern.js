function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

// returns the name from input
Intern.prototype.getName = function () {
    return this.name;
}

// returns the ID from input
Intern.prototype.getId = function () {
    return this.id;

}
// returns the email address from input
Intern.prototype.getEmail = function () {
    return this.email;

}
// returns the intern's school
Intern.prototype.getSchool = function () {
    return this.school;

}
// returns the employee type
Intern.prototype.getRole = function () {
    return 'Intern';

}
module.exports = Intern;