let emergencyFund = 5000;  // Amount of money in the emergency fund
let vacationFund = 2000;   // Amount of money in the vacation fund

let totalFunds = emergencyFund + vacationFund;  // Adding the funds together

console.log("Total Funds:", totalFunds);

//Test:
function assert(actual, expected) {
  if (actual === expected) {
      console.log("Test passed!");
  } else {
      console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
  }
}

assert(totalFunds, 7000);

// Common syntax errors:

// // 1. Missing semicolon at the end of the line
// let totalFunds = emergencyFund + vacationFund  // Missing semicolon

// // 2. Missing closing parenthesis when assigning a value to totalFunds
// let totalFunds = emergencyFund + vacationFund;  // Missing closing parenthesis after vacationFund

// // 3. Using a reserved keyword as a variable name
// let let = 5000;  // "let" is a reserved keyword and cannot be used as a variable name

// // 4. Reassigning a constant variable
// const vacationFund = 2000;
// vacationFund = 3000;  // Trying to reassign a value to a constant variable

// // 5. Using an undefined variable in the console.log statement
// console.log("Total Funds:", totalAmount);  // totalAmount is not defined
