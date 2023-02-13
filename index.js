// # Exercise Local Storage

// In the `exercise.js` file, we find a `user` object. Write a function that saves the user object in `localStorage` with its 'user' key.

// Tips:

// - Remember to use the available `JSON methods` (parse, stringify)

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveItem(obj) {
  const json = JSON.stringify(obj);

  localStorage.setItem("user", json);
}

saveItem(user);

function getItem(item) {
  const val = localStorage.getItem(item);
  const obj = JSON.parse(val);
  return obj;
}

console.log(getItem("user"));
