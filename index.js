// # JSON methods - Exercise 29

// Convert the `developer` object into json.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, "Mario", "Rossi", 25);
// Print developer as json object

let str = JSON.stringify(developer);
console.log(str);

const objJSON = JSON.parse(str);
console.log(objJSON);
