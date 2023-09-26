// Function: Checkout Counter
// Analogy: A function to return the length of an array is like a checkout counter.
// It tells us how many items we have.
function checkoutCounter(items) {
    let itemCount = items.length;
    return itemCount;
}

console.log(checkoutCounter(["apple", "banana", "grapes"])); // Output: 3

// Unit Test: Checkout Counter
assert(checkoutCounter(["apple", "banana", "grapes"]), 3);

// // Syntax error: Missing semicolon at the end of a statement
// let itemCount = items.length  // Missing semicolon

// // Syntax error: Incorrect use of brackets
// console.log(checkoutCounter("apple", "banana", "grapes"));  // Missing square brackets around the array
