let checkNumber = (number) => {
    if (number > 0) {
        return "Positive 😃";
    } else if (number < 0) {
        return "Negative 😔";
    } else {
        return "Zero 😐";
    }
}


console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));

// Assert function
function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

assert(checkNumber(5), "Positive 😃");
assert(checkNumber(-3), "Negative 😔");
assert(checkNumber(0), "Zero 😐");


// // Syntax Error 1: Misspelling or mistyping variable or function names
// let checkNumer = (number) => { // Misspelled variable name "checkNumer"
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// // Syntax Error 2: Missing or extra parentheses in expressions or conditions
// let checkNumber = number => { // Missing parentheses for parameter
//     if (number > 0 {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// // Syntax Error 3: Incorrect use of comparison operators
// if (number = 0) { // Using "=" instead of "==" or "==="
//     return "Zero";
// }

// // Syntax Error 4: Missing or misplaced curly braces
// let checkNumber = (number) => // Missing opening curly brace
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
// } // Missing closing curly brace

// // Syntax Error 5: Missing or extra semicolons at the end of statements
// return "Positive" // Missing semicolon
