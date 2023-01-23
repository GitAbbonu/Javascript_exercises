// # Destructuring assignment - Exercise 23

// Use the destructuring to make the check of the age easier. Try to modify the parameter that the function `isAdult` takes in.

function isAdult(personAge) {
  return personAge >= 18;
}

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { age } = person;

//My version:
const isAdult2 = (age) => age >= 18;

// console.log(age);

console.log(isAdult(age));
//or
console.log(isAdult2(age));
