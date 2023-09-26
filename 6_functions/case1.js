
  function juiceBlender(fruit1, fruit2) {
    const blendedJuice = fruit1 + " 🥤 and " + fruit2 + " 🥤";
    return blendedJuice;
  }
  
  const fruit1 = "🍎";
  const fruit2 = "🍌";
  const result = juiceBlender(fruit1, fruit2);
  
  function assert(actual, expected) {
    if (actual !== expected) {
      throw new Error(`Assertion failed: Expected ${expected}, but got ${actual}`);
    } else {
      console.log('Assertion passed!');
    }
  }
  
  assert(result, "🍎 🥤 and 🍌 🥤");

  

// console.log(result) // Syntax Error 1: Missing semicolon at the end of the statement

// juiceBlender(fruit1, fruit2 // Syntax Error 2: Missing closing parenthesis for the function call

// const fruit3 = "🍊"; // Syntax Error 3: Missing keyword 'const' before the variable declaration

// juiceBlender(fruit1, fruit3); // Syntax Error 4: Undefined variable 'fruit3' used in the function call

// console.log(result) // Syntax Error 5: Duplicate console.log statement without any changes
