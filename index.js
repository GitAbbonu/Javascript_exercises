// # Destructuring assignment - 24

// The destructuring returns `undefined` for the properties: `name`, `surname` and `old`. Try to fix the code without changing the name properties of the object `person`.

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);
