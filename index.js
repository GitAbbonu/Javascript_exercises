// # Classes - Exercise 19

// Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`). Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

class Person {
  #name;
  #lastName;
  #age;
  constructor(name, lastName, age) {
    this.#name = name;
    this.#lastName = lastName;
    this.#age = age;
  }

  //Setter
  set setName(_name) {
    this.#name = _name;
  }
  set setLastN(_lastName) {
    this.#lastName = _lastName;
  }
  set setAge(_age) {
    this.#age = _age;
  }

  //Getter
  get getName() {
    return this.#name;
  }
  get getLastN() {
    return this.#lastName;
  }
  get getAge() {
    return this.#age;
  }

  get fullName() {
    return this.#name + " " + this.#lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria"; //Non Cambia senza i setter
person.lastName = "Verdi"; //Non Cambia senza i setter
console.log(person.fullName); // Mario Rossi
