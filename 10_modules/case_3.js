// main.js
import { Furniture as MyFurniture } from './modules/workshop.js';

console.log(new MyFurniture('chair')); // Output: Furniture { type: 'chair' }
function assert(actual, expected) {
    if (actual === expected) {
        console.log('Pass');
    } else {
        console.log(`Fail. Expected: ${expected}, but got: ${actual}`);
    }
}

// Unit test for importing named export with renaming
// const myChair = new MyFurniture('chair');
// assert(myChair.type, 'chair');
// // main.js
// import { Furniture as MyFurniture } from './workshop.js'; // Syntax error: Missing file extension in the import statement

// console.log(new MyFurniture('chair'));
