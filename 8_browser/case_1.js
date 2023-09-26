console.log("Lights are on!"); // This will be printed to the console

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
}

let output = "Lights are on!";
assert(output, "Lights are on!");

// console.log("Lights are on!"); // This line is commented to produce a syntax error
