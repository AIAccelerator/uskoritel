
let emergencyFund = 3;
let vacationsFund = 0;

vacationsFund += emergencyFund;
emergencyFund = 0;

console.log("emergencyFund:", emergencyFund);
console.log("vacationsFund:", vacationsFund);


// Test Case 2
// Declare a number variable and add it to another number
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

assert(emergencyFund, 0);
assert(vacationsFund, 3);

assert(sum, 15);

// Common Syntax Errors:
// 1. Declaring the variable with the wrong keyword
// const num1 = 5;
// let num2 = 10;

// 2. Misspelling the variable name
// let numm1 = 5;
// let num2 = 10;

// 3. Assigning a string to a number variable
// let num1 = "5";
// let num2 = 10;

// 4. Forgetting to initialize the variable before using it
// let num1;
// let num2 = 10;
// let sum = num1 + num2;

// 5. Using an invalid character in the variable name
// let num#1 = 5;
// let num2 = 10;


