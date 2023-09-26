let tv = {
    brand: "Samsung",
    size: 42,
    type: "LED"
};

delete tv.type;
console.log(tv); // {brand: "Samsung", size: 55}


// Test case for deleting a property from the object


function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
}


assert(JSON.stringify(tv), JSON.stringify({brand: "Samsung", size: 55}));

// // Missing semicolon at the end of a statement
// delete tv.type // Missing semicolon here

// // Using an undefined variable
// delete tv.type; // Assuming "tv" is not defined

// // Missing closing brace for an object or function
// let tv = {
//     brand: "Samsung",
//     size: 55 // Missing closing brace for the object
// };
