function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
};

// returns the name from input
Manager.prototype.getName = function () {
    return this.name;
}

// returns the ID from input
Manager.prototype.getId = function () {
    return this.id;
}

// returns the email address from input
Manager.prototype.getEmail = function () {
    return this.email;
}

// returns the office number from input
Manager.prototype.getOfficeNumber = function () {
    return this.officeNumber;
}

// returns the Manager type
Manager.prototype.getRole = function () {
    return "Manager";
}

module.exports = Manager;