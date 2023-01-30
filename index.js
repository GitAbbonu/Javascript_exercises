// # JSON methods - Exercise 30

// Create the `fromJson` method that takes in a json as parameter and returns an object of type `Person`.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJSON() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    if (typeof json === "string") {
      const newObj = JSON.parse(json);
      const { id, firstName, lastName, age } = newObj;

      const pers = new Person(id, firstName, lastName, age);

      return pers;
    } else if (json instanceof Object) {
      const { id, firstName, lastName, age } = json;
      const pers = new Person(id, firstName, lastName, age);

      return pers;
    }
    return "Inserimento errato";
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const json2 = {
  id: 2,
  firstName: "Luigi",
  lastName: "Rossi",
  age: 25,
};
const json3 = 0;

const developer = Person.fromJson(json);

const developer2 = Person.fromJson(json2);

const developer3 = Person.fromJson(json3);

console.log(developer);
console.log(developer2);
console.log(developer3);
