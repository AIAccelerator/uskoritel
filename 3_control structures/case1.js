function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

//Test Case 1: isHungry is true
let isHungry = true;
if (isHungry) {
    assert("I'm hungry, let's find something to eat!", "I'm hungry, let's find something to eat!");
}

//Test Case 2: isHungry is false
isHungry = false;
if (isHungry) {
    assert("I'm hungry, let's find something to eat!", "I'm hungry, let's find something to eat!");
}


// Common Syntax Errors

// 1. Forgetting to include parentheses after the `if` keyword
// if isHungry {
//     console.log("I'm hungry, let's find something to eat!");
// }


// 3. Using a single equals sign (`=`) instead of a double equals sign (`==` or `===`) for comparison in the condition
// if (isHungry = true) {
//     console.log("I'm hungry, let's find something to eat!");
// }

// 4. Negating the condition incorrectly by using a single exclamation mark instead of two
// if (!isHungry) {
//     console.log("I'm not hungry");
// }

// 5. Not wrapping the code block inside curly braces, especially when there are multiple statements inside the `if` block
// if (isHungry)
//     console.log("I'm hungry");
//     console.log("Let's find something to eat!");

// 6. Declaring a variable inside the `if` block and expecting it to be accessible outside the block
// if (isHungry) {
//     let food = 'pizza';
// }
// console.log(food);

// 7. Using the wrong variable name in the condition
// if (ishungry) {
//     console.log("I'm hungry, let's find something to eat!");
// }

// 8. Incorrectly comparing strings or other non-boolean values in the condition
// if ("true") {
//     console.log("I'm hungry, let's find something to eat!");
// }
