let newChair = document.createElement("div"); // Create a new chair
newChair.innerText = "This is a new chair"; // Label the chair
document.body.appendChild(newChair); // Add the chair to the living room

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test passed!");
    } else {
        console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
}

assert(document.body.contains(newChair), true);

// let newChair = document.createElement("div"); // Create a new chair
// newChair.innerText = "This is a new chair"; // Label the chair
// document.body.append(newChair); // Add the chair to the living room
