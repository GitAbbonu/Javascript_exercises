// # Exercise Promise

// Write a `promise`. If the variable called `number` is greater than 10, then it returns a resolve, otherwise it returns a reject.
// Then manage the promise with `then` and `catch` in case of any reject.

const number = 15;

new Promise((res, rej) => {
  if (number > 10) {
    res(number);
  } else {
    rej("numero inferiore a 10");
  }
})
  .then((res) => console.log(`il numero è sopra il 10: ${number}`))
  .catch((err) => console.log(err));
