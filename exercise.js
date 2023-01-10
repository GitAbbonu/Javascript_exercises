// # Object Methods - Exercise 1

// Create an object `person`. Print its key/value pair in the console. Try to use the method `Object.kyes`:

const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

const keys = Object.keys(person);
const values = Object.values(person);
const keysValues = Object.entries(person);

console.log(keys);
console.log(values);
console.log(keysValues);
