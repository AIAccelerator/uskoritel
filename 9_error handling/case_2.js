try {
    playIndoorBallGame();
} catch (error) {
    console.log('Caught the broken vase incident:', error.message);
}

function testCatchError() {
    try {
        playIndoorBallGame();
        console.assert(false, "Error was not thrown.");
    } catch (error) {
        console.assert(error.message === 'Oops! The vase broke.', 'Error message does not match.');
        console.log('Test case passed.');
    }
}

testCatchError();

// // Syntax error: Missing catch parameter
// function testCatchError() {
//     try {
//         playIndoorBallGame();
//         console.assert(false, "Error was not thrown.");
//     } catch {
//         console.log('Caught the broken vase incident:', error.message);
//     }
// }
