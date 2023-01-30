// # JSON methods es 32

// In this exercise we need to filter the properties of the object `person` in order to convert into JSON just the values of `id` and `age`.

const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

function filter(obj) {
  const { id, age } = obj;

  return (newObj = { id, age });
}

// const json = JSON.stringify(person);
const json = filter(person);

console.log(json); // Should return: { id: 1, age: 25 }
