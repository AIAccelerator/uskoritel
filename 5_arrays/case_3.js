// Think of your array as a stack of plates. The pop method allows you to remove the top plate from the stack.
// Similarly, you can use the pop method to remove the last element from an array.
// To use the pop method, you need to access the array and call the pop method.

const stackOfPlates = ["plate1", "plate2", "plate3"];
const removedPlate = stackOfPlates.pop(); // Removes the last element ("plate3") from the array
console.log(removedPlate); // Prints "plate3"
console.log(stackOfPlates); // Prints ["plate1", "plate2"]

function assert(actual, expected) {
    if (actual === expected) {
      console.log("Test passed!");
    } else {
      console.log(`Test failed! Expected ${expected}, but received ${actual}.`);
    }
  }
  

  assert(removedPlate, "🍽️ plate3");
  assert(stackOfPlates, ["🍽️ plate1", "🍽️ plate2"]);
  
//   // Error 1: No semicolon at the end of the line - In JavaScript, it's a common practice to end statements with a semicolon. While JavaScript does automatic semicolon insertion, there can be some edge cases where this can cause unexpected results.
// let stackOfPlates = ["🍽️ plate1", "🍽️ plate2", "🍽️ plate3"]

// // Error 2: Misspelled variable name - This is a very common mistake in coding. In this case, the variable name 'stackOfPlates' is misspelled as 'stackofPlates'.
// let removedPlate = stackofPlates.pop();

// // Error 3: Using assignment operator (=) instead of comparison operator (== or ===) in a conditional statement - JavaScript has different operators for assignment and comparison, mixing up these can lead to unexpected results.
// if (removedPlate = "🍽️ plate3") { console.log("Last plate removed."); }

// // Error 4: Incorrect method name - This error often happens when a developer forgets the exact method name or misspells it. Here, 'pop' method is mistakenly written as 'pup'.
// let anotherRemovedPlate = stackOfPlates.pup();

// // Error 5: Using a variable before declaration - This error happens when a variable is used before it has been declared.
// console.log("Another removed plate:", yetAnotherRemovedPlate);
// let yetAnotherRemovedPlate = stackOfPlates.pop();
