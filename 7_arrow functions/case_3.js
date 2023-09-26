let checkoutCounter = (items) => {
    let itemCount = items.length;
    return itemCount;
}

console.log(checkoutCounter(["apple", "banana", "grapes"]));

// Assert function
function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

// Unit Test: Checkout Counter
assert(checkoutCounter(["apple", "banana", "grapes"]), 3);

// // Syntax Error 1: Misspelling or mistyping variable or function names
// let checkutCounter = (items) => { // Misspelled variable name "checkutCounter"
//     let itemCount = items.length;
//     return itemCount;
// }

// // Syntax Error 2: Missing or extra square brackets in array declarations
// console.log(checkoutCounter("apple", "banana", "grapes")); // Missing square brackets for array

// // Syntax Error 3: Forgetting to close a parentheses or bracket
// let checkoutCounter = (items => { // Missing closing parenthesis for parameters
//     let itemCount = items.length;
//     return itemCount;
// }

// // Syntax Error 4: Incorrectly using dot notation or brackets to access array elements or object properties
// let itemCount = items.length; // Missing brackets for items.length

// // Syntax Error 5: Using an invalid index or key to access array elements or object properties
// let itemCount = items[3].length; // Accessing index 3 instead of index 2

// // Syntax Error 6: Misspelling or mistyping variable or function names
// let itemCount = itmes.length; // Misspelled variable name "itmes"

// // Syntax Error 7: Using assignment operator (=) instead of equality operator (== or ===) in conditions
// if (itemCount = 3) { // Using "=" instead of "==" or "==="
//     console.log("Three items");
// }

// // Syntax Error 8: Missing or misplaced commas in array or object declarations
// console.log(checkoutCounter(["apple" "banana", "grapes"])); // Missing comma between "apple" and "banana"

// // Syntax Error 9: Missing or extra parentheses in function calls or expressions
// console.log(checkoutCounter(["apple", "banana", "grapes"])); // Missing opening parenthesis for console.log

// // Syntax Error 10: Using reserved keywords as variable or function names
// let let = (items) => { // Using reserved keyword "let" as a variable name
//     let itemCount = items.length;
//     return itemCount;
// }
