// Test Case 1
// Declare a string variable and print its length
// Declare a string variable and print its length
let emergencyFund = "💰💰💰";
console.log(emergencyFund.length);

function assert(actual, expected) {
    if (actual === expected) {
      console.log("Test Passed!");
    } else {
      console.error(`Test Failed! Expected ${expected}, but got ${actual}`);
    }
  }
  
// Test case
assert(emergencyFund, "💰💰💰");
// Common Syntax Errors:

// Error 1: Missing semicolon at the end of the statement
//let emergencyFund = "💰💰💰" // Missing semicolon here

// Error 2: Incorrectly using a single equal sign for comparison
//assert(emergencyFund = "💰💰💰", "emergencyFund should equal 💰💰💰");

// Error 3: Using a reserved word as a variable name
//let const = "💰💰💰"; // "const" is a reserved word

// Error 4: Forgetting to close a string with a quotation mark
//let emergencyFund = "💰💰💰; // Missing closing quotation mark

// Error 5: Missing parentheses in the console.log statement
//console.log emergencyFund.length; // Missing parentheses after console.log