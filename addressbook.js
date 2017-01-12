function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = [];
}

function Email (address, type){
    this.address = address;
    this.type = function() {
    if (type.toLowerCase() == "work" || type.toLowerCase() == "home") {
        this.type = type;
    } else {
        this.type == "other";
    }
    };
}
Person.prototype.addEmail = function(emailAddress, type){
    this.emailAddress = emailAddress;
    this.type = type;
    // Email.push(Person.email)
} ;

var Cathy = new Person("Cathy", "Hernandez");
console.log(Cathy.addEmail("Cathy@email.com", "work"));