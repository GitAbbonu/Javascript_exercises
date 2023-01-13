// # Array Methods - Exercise 55

// Create a function called `ageAverage` that takes in an array of people and returns the average age.

function calculateAverageAge(persons) {
  const initValue = 0;
  const map = persons.map((elem) => elem.age);
  const sumAges = map.reduce((a, b) => a + b, initValue);
  const average = Math.floor(sumAges / map.length);
  return average;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);
