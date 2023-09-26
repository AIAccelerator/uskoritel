function countSpoonsInDrawer(drawer) {
    return drawer.length;
  }
  
  let myDrawer = ['🥄', '🥄', '🥄', '🥄', '🥄'];
  let spoonCount = countSpoonsInDrawer(myDrawer);
  
  console.log("Number of spoons in the drawer:", spoonCount);

let expectedSpoonCount = 5;

function assert(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: Expected ${expected}, but got ${actual}`);
  } else {
    console.log('Assertion passed!');
  }
}

assert(spoonCount, expectedSpoonCount); 


  // Syntax Error 1: Missing closing parenthesis in the function declaration
  // function countSpoonsInDrawer(drawer {
  //                                    ^ Missing closing parenthesis
  
  // Syntax Error 2: Missing semicolon at the end of the return statement
  // return drawer.length
  //                  ^ Missing semicolon
  
  // Syntax Error 3: Incorrect variable name in the function call
  // let spoonCount = countSpoonInDrawer(myDrawer);
  //                                  ^ Incorrect function name "countSpoonInDrawer"
  
  // Syntax Error 4: Using an invalid character in the array elements
  // let myDrawer = ['🥄', '🥄', '🥄', '🥄', '🥄', ];
  //                                      ^ Invalid comma after the last element
  
  // Syntax Error 5: Missing quotation marks around the string elements
  // let myDrawer = [🥄, 🥄, 🥄, 🥄, 🥄];
  //                ^ Missing quotation marks around the spoon emojis
  