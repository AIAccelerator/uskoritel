import { Visitor } from './visitor.js';
import { VIPVisitor } from './vipVisitor.js';
import { VIPActivity, VIPBumperCars } from './vipActivity.js';

let visitor = new VIPVisitor('Sally', 100, true);
let vipBumperCars = new VIPBumperCars(15, true);


// Създаваме проста "assert" функция
function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Test failed");
    }
}

// Твоят код тук - импортиране на модулите и създаване на инстанции
// ...

// Тестове

// Тест за проверка на canAfford функционалността
function testCanAfford() {
    const poorVisitor = new VIPVisitor('PoorGuy', 5, true);
    assert(
        vipBumperCars.canAfford(poorVisitor).includes('😢'),
        "PoorGuy shouldn't be able to afford the VIP Bumper Cars"
    );

    const richVisitor = new VIPVisitor('RichGuy', 100, true);
    assert(
        vipBumperCars.canAfford(richVisitor).includes('🎉'),
        "RichGuy should be able to afford the VIP Bumper Cars"
    );
}

// Тест за проверка на play функционалността (предполагаме, че play връща "Success" при успешно изпълнение)
function testPlay() {
    const richVisitor = new VIPVisitor('RichGuy', 100, true);
    assert(vipBumperCars.play(richVisitor) === "Success", "Playing should be successful for RichGuy");
}

// Изпълнение на тестовете
try {
    testCanAfford();
    //testPlay();
    console.log("All tests passed! 🎉");
} catch (error) {
    console.log(`Test failed 😢: ${error.message}`);
}
