// # Dom Tree - Exercise 2

// Get the value of the `form-input` text input field and print it in the console.

// Use the `class` as selector.

const nameV = document.querySelectorAll(".form-input")[0];

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(nameV.value);
});
