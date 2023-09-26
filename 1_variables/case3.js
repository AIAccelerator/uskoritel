// Test Case 3
// Declare a boolean variable and flip its value
let isTrue = true;
isTrue = !isTrue;
console.log(isTrue);


function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

// Debug Prompt: What is the value of isTrue after flipping its value?
assert(isTrue, false);

// let lightsOn = true;

// lightsOn = !lightsOn;  // Flips the value of lightsOn

// console.log("Lights On:", lightsOn);

// assert(lightsOn, false);

// Common Syntax Errors:



// let lightsOn = true

// lightsOn = !lightsOn;  // SyntaxError: missing ;
// console.log("Lights On:", lightsOn);
// let LightsOn = true;

// lightsOn = !lightsOn;  // ReferenceError: lightsOn is not defined
// console.log("Lights On:", lightsOn);
// let lightsOn true;

// lightsOn = !lightsOn;  // SyntaxError: missing =
// console.log("Lights On:", lightsOn);
// let lightsOn = true;

// lightsOn = !lightsOn;  // Flips the value of lightsOn
// // console.log("Lights On:", lightsOn);
// let lightsOn = true;

// lightsOn = !lightsOn  // SyntaxError: missing closing parenthesis ;
// console.log("Lights On:", lightsOn);
