// # Dom Tree - Exercise 44

// Get the value of all `input` and `label` fields.

// The output in the console must be:

// ```
// First Name: Mario
// Last Name: Rossi
// Age: 25
// ```

for (let i = 0; i < 3; i++) {
  const _label = document.querySelectorAll("label")[i].innerText;
  const _input = document.querySelectorAll("input")[i].value;

  console.log(_label + " " + _input);
}
