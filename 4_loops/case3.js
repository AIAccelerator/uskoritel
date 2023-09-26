var daysInHotel = 6; // Default value
var day = 1;
var result = "";

do {
  result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
  day++;
} while (day <= daysInHotel);

console.log(result);

function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

var expectedOutput = "Enjoy your day number 1 🌊🌴\n" +
                        "Enjoy your day number 2 🌊🌴\n" +
                        "Enjoy your day number 3 🌊🌴\n" +
                        "Enjoy your day number 4 🌊🌴\n" +
                        "Enjoy your day number 5 🌊🌴\n" +
                        "Enjoy your day number 6 🌊🌴\n";
assert(result, expectedOutput);
// EXAMPLE 1: Forgetting the semicolon at the end of a statement
// var daysInHotel = 6; // Default value
// var day = 1;
// result = ""
// while (day <= daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }
// console.log(result); // Semicolon is missing here

// // EXAMPLE 2: Forgetting the parentheses after "while"
// var daysInHotel = 6;
// var day = 1;
// result = "";
// while day <= daysInHotel {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }
// console.log(result); // Parentheses are missing here in the while statement

// // EXAMPLE 3: Forgetting the opening or closing braces
// var daysInHotel = 6;
// var day = 1;
// result = "";
// while (day <= daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++; // Closing brace is missing here
// }
// console.log(result);

// // EXAMPLE 4: Using assignment (=) instead of comparison (<=)
// var daysInHotel = 6;
// var day = 1;
// result = "";
// while (day = daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }
// console.log(result); // Should use <= for comparison, not =

// // EXAMPLE 5: Using string instead of variable in while condition
// var daysInHotel = 6;
// var day = 1;
// result = "";
// while ("day" <= daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }
// console.log(result); // Should use variable day, not string "day"
