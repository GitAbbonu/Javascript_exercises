// # Conditionals & Loops - Exercise 4

// Create a function `sumUntil` that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.

// Example:

// function sumUntil(maxValue) {
//  ...
// }

// console.log(sumUntil(5)); // OUTPUT: 15

function sumUntil(maxValue) {
  let sum = 0;

  for (let i = 0; i <= maxValue; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumUntil(5)); //15
console.log(sumUntil(10)); //55
console.log(sumUntil(14)); //105
console.log(sumUntil(8)); //36
