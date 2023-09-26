// Prompt: An if-else if-else statement is like deciding what to wear based on the temperature.
// If it's below 0, we wear a winter coat. If it's between 0 and 20, we wear a jacket.
// Otherwise, we wear a T-shirt.

let temperature = 30;

// if (temperature < 0) {
//     console.log("It's cold, put on a winter coat.");
// } else if (temperature < 20) {
//     console.log("It's cool, put on a jacket.");
// } else {
//     console.log("It's warm, just wear a T-shirt.");
// }

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

// // Test Case 1
// temperature = -5;
// if (temperature < 0) {
//     assert("It's cold, put on a winter coat.", "It's cold, put on a winter coat.");
// } else if (temperature < 20) {
//     assert("It's cool, put on a jacket.", "It's cool, put on a jacket.");
// } else {
//     assert("It's warm, just wear a T-shirt.", "It's warm, just wear a T-shirt.");
// }

// // Test Case 2
// temperature = 10;
// if (temperature < 0) {
//     assert("It's cold, put on a winter coat.", "It's cold, put on a winter coat.");
// } else if (temperature < 20) {
//     assert("It's cool, put on a jacket.", "It's cool, put on a jacket.");
// } else {
//     assert("It's warm, just wear a T-shirt.", "It's warm, just wear a T-shirt.");
// }

// Test Case 3
// temperature = 25;
// if (temperature < 0) {
//     assert("It's cold, put on a winter coat.", "It's cold, put on a winter coat.");
// } else if (temperature < 20) {
//     assert("It's cool, put on a jacket.", "It's cool, put on a jacket.");
// } else {
//     assert("It's warm, just wear a T-shirt.", "It's warm, just wear a T-shirt.");
// }

// // 1. Using the wrong comparison operators in the conditions
let output = "";
temperature = 1;
if (temperature < 0) {
    output = "It's cold, put on a winter coat.";
} else if (temperature < 20) {
    output = "It's cool, put on a jacket.";
} else {
    output = "It's warm, just wear a T-shirt.";
}
assert(output, "It's cool, put on a jacket.");

temperature = -1;
// // 2. Misplacing the order of conditions in the `if-else if-else` statement

if (temperature < 0) {
    console.log("It's cold, put on a winter coat.");
} else if (temperature < 20) {
    console.log("It's cool, put on a jacket.");
} else {
    console.log("It's warm, just wear a T-shirt.");
}

// 3. Missing the closing parentheses in the conditions
if (temperature < 0 {
    console.log("It's cold, put on a winter coat.");
} else if (temperature < 20) {
    console.log("It's cool, put on a jacket.");
} else {
    console.log("It's warm, just wear a T-shirt.");
}

// // 4. Negating the condition incorrectly
// if (!temperature < 0) {
//     console.log("It's cold, put on a winter coat.");
// } else if (temperature < 20) {
//     console.log("It's cool, put on a jacket.");
// } else {
//     console.log("It's warm, just wear a T-shirt.");
// }

// // 5. Not providing a code block for each condition
// if (temperature < 0)
//     console.log("It's cold, put on a winter coat.");
// else if (temperature < 20)
//     console.log("It's cool, put on a jacket.");
