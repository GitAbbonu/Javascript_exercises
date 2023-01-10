// # Exercise Closures

// Starting from the previous exercise, are you able to print the value of `helloName`, after 1 second?

// Tips:

// - The method that you need to solve the exercise is: `setTimeout`

const printName = () => {
  let helloName = "Hello John";

  const inner = () => {
    setTimeout(() => {
      console.log(helloName);
    }, 1000);
  };

  return inner();
};

printName();
