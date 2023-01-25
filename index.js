// # Rest parameters and spread syntax

// Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

function sum(...nums) {
  return nums.reduce((cont, v) => cont + v, 0);
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
