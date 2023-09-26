let isRaining = false;

if (isRaining) {
    console.log("It's raining, let's stay home.");
} else {
    console.log("The weather is nice, let's go outside!");
}

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

// Test Case 1
isRaining = true;
if (isRaining) {
    assert("It's raining, let's stay home.", "It's raining, let's stay home.");
} else {
    assert("The weather is nice, let's go outside!", "The weather is nice, let's go outside!");
}

// Test Case 2
isRaining = false;
if (isRaining) {
    assert("It's raining, let's stay home.", "It's raining, let's stay home.");
} else {
    assert("The weather is nice, let's go outside!", "The weather is nice, let's go outside!");
}


// // 1. Missing the `else` keyword or misplacing it
// if (isRaining) {
//     console.log("It's raining, let's stay home.");
// }
// console.log("The weather is nice, let's go outside!");

// // 2. Using a single equals sign (`=`) instead of a double equals sign (`==` or `===`) in the condition
// if (isRaining = true) {
//     console.log("It's raining, let's stay home.");
// } else {
//     console.log("The weather is nice, let's go outside!");
// }

// // 3. Negating the condition incorrectly
// if (!isRaining) {
//     console.log("It's raining, let's stay home.");
// } else {
//     console.log("The weather is nice, let's go outside!");
// }

// // 4. Forgetting to wrap the condition in parentheses
// if isRaining {
//     console.log("It's raining, let's stay home.");
// } else {
//     console.log("The weather is nice, let's go outside!");
// }

// // 5. Not providing a code block for both the `if` and `else` parts
// if (isRaining)
//     console.log("It's raining, let's stay home.");
// else
//     console.log("The weather is nice, let's go outside!");
