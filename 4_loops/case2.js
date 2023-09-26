// var daysInHotel = 6; // Default value
// var day = 1;
// result = "";
// while (day <= daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }
// console.log(result);

// // Test Case 2
// function assert(actual, expected) {
//     if (actual === expected) {
//         console.log("Test Passed!");
//     } else {
//         console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
//     }
// }

// var expectedOutput = "Enjoy your day number 1 🌊🌴\n" +
//                         "Enjoy your day number 2 🌊🌴\n" +
//                         "Enjoy your day number 3 🌊🌴\n" +
//                         "Enjoy your day number 4 🌊🌴\n" +
//                         "Enjoy your day number 5 🌊🌴\n" +
//                         "Enjoy your day number 6 🌊🌴\n";
// assert(result, expectedOutput);
                       
// // 1. Грешка: Пропусната скоба при дефиниране на цикъла
// var daysInHotel = 6; 
// var day = 1;
// var result = "";

// while (day <= daysInHotel {  // Грешно: липсва скоба преди фигурната скоба
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }

// // 2. Грешка: Липсващ знак за събиране при конкатенация на стрингове
// var daysInHotel = 6; 
// var day = 1;
// var result = "";

// while (day <= daysInHotel) {
//   result += "Enjoy your day number " day + " 🌊🌴" + "\n";  // Грешно: липсва знак за събиране между двата стринга
//   day++;
// }

// // 3. Грешка: Липсваща ключова дума var при дефиниране на променлива
let daysInHotel = 6;  // Грешно: липсва ключовата дума var при дефиниране на променлива 
let day = 1;
let result = "";

while (day <= daysInHotel) {
  result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
  day++;
}

console.log(result);

// // 4. Грешка: Липсващ оператор за сравнение в условието на цикъла
// var daysInHotel = 6;
// var day = 1;
// var result = "";

// while (day daysInHotel) {  // Грешно: липсва оператор за сравнение (<=) между day и daysInHotel
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";
//   day++;
// }

// // 5. Грешка: Липсващ оператор за инкрементиране в условието на цикъла
// var daysInHotel = 6;
// var day = 1;
// var result = "";

// while (day <= daysInHotel) {
//   result += "Enjoy your day number " + day + " 🌊🌴" + "\n";  // Грешно: липсва оператор за инкрементиране (++), което ще доведе до безкраен цикъл
// }
