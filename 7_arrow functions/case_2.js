let coffeeMachine = (coffeeType = "espresso") => {
    let coffee = `Here is your ${coffeeType}! ☕️`;
    return coffee;
}

console.log(coffeeMachine());
console.log(coffeeMachine("cappuccino"));

// Assert function
function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

// Unit Test: Coffee Machine
assert(coffeeMachine(), "Here is your espresso! ☕️");
assert(coffeeMachine("cappuccino"), "Here is your cappuccino! ☕️");

// let coffeeMachine = (coffeeType = "espresso") => {
//     let coffee = `Here is your ${coffeeType}! ☕️`;
//     return coffee;
// }  // Missing closing parenthesis for the arrow function declaration.

// coffeeMachine()  // Missing semicolon to end the statement.

// let coffeeType = "cappuccino";  // Missing keyword "const" or "let" to declare a variable.

// let coffee = `Here is your ${coffeeType!} ☕️`;  // Incorrect use of exclamation mark (!) inside the template literal.

// return coffee;  // "return" statement is outside the function body.