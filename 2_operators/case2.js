// Declare variables
var vacationFund = 2000;
var hotelBill = 500;

// Subtract the hotel bill from the vacation fund
var remainingFunds = vacationFund - hotelBill;

// Output the result
console.log("Remaining funds after hotel bill: $" + remainingFunds);


function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
  }

  
assert(remainingFunds, 1500);

// Common syntax errors:

// // 1. Missing semicolon at the end of the line
//vacationFund = 2000  // Missing semicolon

// // 2. Missing closing parenthesis for the console.log() function
// console.log("Remaining funds after hotel bill: $" + remainingFunds;  // Missing closing parenthesis

// // 3. Using an incorrect operator for subtraction
// var remainingFunds = vacationFund + hotelBill;  // Should use "-" instead of "+"

// // 4. Misspelled variable name
// var remaningFunds = vacationFund - hotelBill;  //