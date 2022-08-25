function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
};

// returns the name from input
Engineer.prototype.getName = function () {
    return this.name;

}
// returns the ID from input
Engineer.prototype.getId = function () {
    return this.id;

}
// returns the email address from input
Engineer.prototype.getEmail = function () {
    return this.email;

}
// returns the github username
Engineer.prototype.getGithub = function () {
    return this.github;

}
// returns the employee type
Engineer.prototype.getRole = function () {
    return 'Engineer';

}
module.exports = Engineer;