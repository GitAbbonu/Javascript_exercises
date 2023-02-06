// # Exercise Async Callback

// Write a function called `repeatHello`, which will take as parameters a callback.
// The callback function will simply print "Hello".
// The `repeatHello` function will have to execute the callback function with an interval of 1 second.

// Tips:

// - The `setInterval` method will be useful

function sayHello() {
  return "Hello";
}

function repeatHello(callback) {
  const int = setInterval(() => console.log(callback()), 1000);
}

repeatHello(sayHello);
