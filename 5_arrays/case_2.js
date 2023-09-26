let groceryBag = [];

// Adding emojis to groceryBag array
groceryBag.push('🍎', '🍌', '🍊');

console.log(groceryBag);

function assert(actual, expected) {
  if (actual === expected) {
    console.log("Test passed!");
  } else {
    console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
  }
}

assert(JSON.stringify(groceryBag), JSON.stringify(['🍎', '🍌', '🍊']));


// // 1. Double semicolon at the end of the line
// // SyntaxError: Unexpected token ';'

// groceryBag.push('🍎', '🍌', '🍊')

// // 2. Missing semicolon at the end of the line
// // SyntaxError: Missing semicolon

// console.log(groceryBag)

// // 3. Missing closing parenthesis
// // SyntaxError: Unexpected end of input

// let appleCount = groceryBag.push('🍎', '🍎', '🍎'

// // 4. Missing closing bracket
// // SyntaxError: Unexpected end of input

// let groceryBag = ['apple', 'banana', 'orange';

// // 5. Duplicate variable declaration
// // SyntaxError: Identifier 'groceryBag' has already been declared

// let groceryBag = ['apple', 'banana', 'orange'];

// console.log(groceryBag);