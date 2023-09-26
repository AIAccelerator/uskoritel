let vacationFund = 1500;
const monthlyPayment = 100;

// Making 3 monthly payments
vacationFund += monthlyPayment * 3;

console.log("Vacation Fund:", vacationFund);


function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
  }

assert(vacationFund, 1800);

// // Syntax Error 1: Missing variable declaration keyword 'let' before vacationFund
// vacationFund = 1500;

// // Syntax Error 2: Invalid assignment to a constant variable 'monthlyPayment'
// monthlyPayment = 100;

// // Syntax Error 3: Missing closing parenthesis ')' in the console.log statement
// console.log("Vacation Fund:", vacationFund;

// // Syntax Error 4: Incorrect operator '+' used for concatenation instead of ',' in the console.log statement
// console.log("Vacation Fund:" + vacationFund);