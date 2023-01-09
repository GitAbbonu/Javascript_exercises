// Create a function named calculateSalary which takes an input parameter, and calculates and returns the corresponding salary. You must use the switch switch statement. For each role the corresponding salary is as follows:

// ceo => 2200€
// manager => 1800€
// cto => 1800€
// developer => 1500€
// default => 1000€

function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return " The 'ceo' salary is: 2200€";
      break;
    case "manager":
      return " The 'manager' salary is: 1800€";
      break;

    case "cto":
      return " The 'cto' salary is: 1800€";
      break;

    case "developer":
      return " The 'developer' salary is: 1500€";
      break;

    default:
      return " The 'other' salary is: 1000€";
      break;
  }
}

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
