// Create an array with five elements
const storageRoom = [
  "Box 1",
  "Box 2",
  "Box 3",
  "Box 4",
  "Box 5"
];

// Accessing the contents of a specific box
const boxNumber = 3; // Example: accessing contents of Box 3
const contents = storageRoom[boxNumber - 1];
console.log(`The contents of Box ${boxNumber} is ${contents}.`);


function assert(actual, expected) {
    if (actual === expected) {
      console.log("Test passed!");
    } else {
      console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
  }
//   // 1. Missing semicolon at the end of the line
// const storageRoom = [ // Error: SyntaxError: Unexpected token ']'
// "Box 1"
// "Box 2",
// "Box 3",
// "Box 4",
// "Box 5"
// ];

// // 2. Reassigning a constant value
// const boxNumber = 3;
// boxNumber = 4; // Error: TypeError: Assignment to constant variable.
// const contents = storageRoom[boxNumber - 1];
// console.log(`The contents of Box ${boxNumber} is ${contents}.`);

// // 3. Missing closing parenthesis in template literal
// console.log(`The contents of Box ${boxNumber is ${contents}.`); // Error: SyntaxError: Unexpected token '}'

// // 4. Using the wrong operator for concatenation
// const contents = storageRoom[boxNumber - 1];
// console.log("The contents of Box " + boxNumber + " is " + contents + "."); // Error: SyntaxError: Unexpected identifier

// // 5. Missing closing square bracket in array indexing
// const contents = storageRoom[boxNumber - 1; // Error: SyntaxError: Unexpected token ';'
// console.log(`The contents of Box ${boxNumber} is ${contents}.`);