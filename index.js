// # Rest parameters and spread syntax

// Perform a code refactoring by using the Rest operator. The output of the console.log must not change.

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const [id, personInfo] = [person.id, person];
delete personInfo.id;

console.log(id, personInfo);
