// Employee constructor
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
};

// returns the name from input
Employee.prototype.getName = function () {
    return this.name;
}

// returns the ID from input
Employee.prototype.getId = function () {
    return this.id;
}

// returns the email address from input
Employee.prototype.getEmail = function () {
    return this.email;
}

// returns the employee type
Employee.prototype.getRole = function () {
    return "Employee";
}

module.exports = Employee;