// # Destructuring assignment - 21

// Use the destructuring, instead of a temporary variable, to swap the values of the variables.
//
//

let [num1, num2] = [10, 20];

// let num1 = 10;
// let num2 = 20;

console.log("Before swap: ", num1, num2); // Before swap: 10 20

//! Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;

[num1, num2] = [num2, num1];

console.log("After swap: ", num1, num2); // After swap: 20 10
