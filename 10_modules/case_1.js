// main.js
import { favoriteToy } from "./modules/kidsRoom.js";

console.log(favoriteToy); // Output: "teddy bear"
function assert(actual, expected) {
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log(`Fail. Expected: ${expected}, but got: ${actual}`);
    }
}

// Unit test for importing default export
assert(favoriteToy, "teddy bear");
// main.js
// import favoriteToy from './kidsRoom.js // Syntax error: Missing closing quote in the file path

// console.log(favoriteToy);
