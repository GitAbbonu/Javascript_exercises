// # Exercise Async Callback

// Starting from the previous exercise, we want to add to our function `repeatHello`, a `clearInterval` after 5 seconds, could you do that?

// Tips:

// - The `setInterval` and `setTimeout` methods will be useful

function sayHello() {
  return "Hello";
}

function repeatHello(callback) {
  const int = setInterval(() => console.log(callback()), 1000);
  setTimeout(() => clearInterval(int), 5000);
}

repeatHello(sayHello);
