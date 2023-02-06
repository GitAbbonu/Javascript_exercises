// # Exercise Promise errors

// Starting from the previous exercise, try to better handle all errors through the `Error` class and the `catch` method. Also add the `finally` method.

// Tips:

// - Error documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const isLogged = false;

const prom1 = new Promise((res, rej) => {
  setTimeout(() => {
    if (isLogged) {
      let randomNum = Math.random();
      res(randomNum);
    } else {
      rej("error, no log in");
    }
  }, 2000);
})
  .then((randomNum) => {
    if (randomNum > 0.5) {
      const obj = { name: "John", age: 24 };
      console.log(obj);
    } else {
      console.error("no obj");
    }
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("the end"));
