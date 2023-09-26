const playIndoorBallGame = () => {
    throw new Error('Oops! The vase broke.');
}

try {
    playIndoorBallGame();
} catch (error) {
    console.log(error.message); // Logs 'Oops! The vase broke.'
}

function testPlayIndoorBallGame() {
    try {
        playIndoorBallGame();
        console.assert(false, "Error was not thrown."); // Assertion to check if an error is thrown
    } catch (error) {
        console.assert(error.message === 'Oops! The vase broke.', 'Error message does not match.'); // Assertion to check if the error message matches
        console.log('Test case passed.');
    }
}

testPlayIndoorBallGame();

// Syntax error: Missing parentheses after function name
// function testPlayIndoorBallGame {
//     try {
//         playIndoorBallGame();
//         console.assert(false, "Error was not thrown.");
//     } catch (error) {
//         console.assert(error.message === 'Oops! The vase broke.', 'Error message does not match.');
//         console.log('Test case passed.');
//     }
// }

