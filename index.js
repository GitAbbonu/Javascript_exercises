// # Classes - Exercise 16

// Define a class called `Person` that takes in two arguments (`firstName` and `lastName`) in the constructor.

// const developer = new Person('Mario', 'Rossi');
// console.log(developer.firstName + " " + developer.lastName);

// Class definition
class Person {
  firstName = "";
  lastName = "";
  constructor(name, lastName) {
    this.firstName = name;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(developer.firstName + " " + developer.lastName);
