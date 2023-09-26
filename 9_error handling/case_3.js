try {
    playIndoorBallGame();
} catch (error) {
    console.log('Caught the broken vase incident:', error.message);
} finally {
    console.log('Cleaning up the room...');
}

function testFinallyBlock() {
    try {
        playIndoorBallGame();
        console.assert(false, "Error was not thrown.");
    } catch (error) {
        console.assert(error.message === 'Oops! The vase broke.', 'Error message does not match.');
        console.log('Caught the broken vase incident:', error.message);
    } finally {
        console.log('Cleaning up the room...');
    }
}

testFinallyBlock();


// Syntax error: Missing closing curly brace for try block
// function testFinallyBlock() {
//     try {
//         playIndoorBallGame();
//         console.assert(false, "Error was not thrown.");
//     catch (error) {
//         console.assert(error.message === 'Oops! The vase broke.', 'Error message does not match.');
//         console.log('Caught the broken vase incident:', error.message);
//     } finally {
//         console.log('Cleaning up the room...');
//     }
// }
