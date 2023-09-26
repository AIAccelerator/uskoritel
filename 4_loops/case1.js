let daysInHotel = 6; // Default value
let result = "";
for (let day = 1; day <= daysInHotel; day++) {
	result += "Насладете се на ден номер " + day + " 🌊🌴" + "\n";
}
console.log(result);


// Assert function
function assert(actual, expected) {
    if (actual === expected) {
        console.log("Test Passed!");
    } else {
        console.log(`Test Failed! Expected ${expected}, but got ${actual}.`);
    }
}

var expectedOutput = "Насладете се на ден номер 1 🌊🌴\n" +
                     "Насладете се на ден номер 2 🌊🌴\n" +
                     "Насладете се на ден номер 3 🌊🌴\n" +
                     "Насладете се на ден номер 4 🌊🌴\n" +
                     "Насладете се на ден номер 5 🌊🌴\n" +
                     "Насладете се на ден номер 6 🌊🌴\n";
assert(result, expectedOutput);

// 1. Грешка: Пропусната скоба при дефиниране на цикъла
// var daysInHotel = 6; 

// for (var day = 1; day <= daysInHotel; day++ {  // Грешно: липсва скоба преди фигурната скоба
//   console.log("Enjoy your day number " + day + " 🌊🌴");
// }

// // 2. Грешка: Липсващ знак за събиране при конкатенация на стрингове
// var daysInHotel = 6;

// for (var day = 1; day <= daysInHotel; day++) {
//   console.log("Enjoy your day number " day + " 🌊🌴");  // Грешно: липсва знак за събиране между двата стринга
// }

// // 3. Грешка: Липсваща ключова дума var при дефиниране на променлива
// daysInHotel = 6;  // Грешно: липсва ключовата дума var при дефиниране на променлива 

// for (var day = 1; day <= daysInHotel; day++) {
//   console.log("Enjoy your day number " + day + " 🌊🌴");
// }

// // 4. Грешка: Липсващ оператор за сравнение в условието на цикъла
// var daysInHotel = 6;

// for (var day = 1; day daysInHotel; day++) {  // Грешно: липсва оператор за сравнение (<=) между day и daysInHotel
//   console.log("Enjoy your day number " + day + " 🌊🌴");
// }

// // 5. Грешка: Липсващ оператор за инкрементиране в условието на цикъла
// var daysInHotel = 6;

// for (var day = 1; day <= daysInHotel; day) {  // Грешно: липсва оператор за инкрементиране (++), което ще доведе до безкраен цикъл
//   console.log("Enjoy your day number " + day + " 🌊🌴");
// }