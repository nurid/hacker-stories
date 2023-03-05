// React Component instatiation section, p 42

// class declaration
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ` ` + this.lastName;
    }
}

// class instantiation
const robin = new Person('Robin', `Wieruch`);

console.log(robin);

// class instantiation
const dennis = new Person('Dennis' , `Wieruch`);

console.log(dennis);

/*
similar to component declaration (once) and
component instantiation (can be more than once).
*/


debugger;