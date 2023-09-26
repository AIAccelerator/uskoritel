// main.js
import { cleanupToys } from './modules/livingRoom.js';

console.log(cleanupToys()); // Output: "Toys cleaned up!"


function assert(actual, expected) {
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log(`Fail. Expected: ${expected}, but got: ${actual}`);
    }
}

// Unit test for importing named export
assert(cleanupToys(), "Toys cleaned up!");


// main.js
// import { cleanupToys as cleanUpToys } from './livingRoom.js'; // Syntax error: Incorrect named export renaming syntax

// console.log(cleanUpToys());
