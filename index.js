// # Exercise Promise errors

// Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.

// Tips:

// - Error documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const isLogged = true;

const secondPromise = (num) => {
  return new Promise((res, rej) => {
    num > 0.5 ? res('{ name: "John", age: 24 }') : rej("no obj");
  });
};

new Promise((res, rej) => {
  if (isLogged) {
    let randomNum = Math.random();
    res(randomNum);
  } else {
    rej("error, no log in");
  }
})

  .then((num) => secondPromise(num))
  .then((res) => console.log(res))
  .catch((err) => console.error("error"))
  .finally((res) => console.log("finally is the end"));
