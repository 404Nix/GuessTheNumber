let numberToGuess; // Global variable to store the number to guess
let isAnimating = false; // Flag to track if animation is in progress

document.getElementById('rangeform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const rangeValue = parseInt(document.getElementById('range').value);
    console.log('Range:', rangeValue);
    numberToGuess = Math.floor(Math.random() * rangeValue) + 1; // Generate new number
    console.log('Number to guess:', numberToGuess);
    showGuessForm();
});

document.getElementById('userguess').addEventListener('submit', function(event) {
    event.preventDefault();
    const guessValue = parseInt(document.getElementById('guess').value);

    if (guessValue === numberToGuess) {
        console.log('Congratulations! You guessed the number:', numberToGuess);
        displayResult(true, numberToGuess);
    } else {
        console.log('Incorrect guess. Try again.');
        displayResult(false);
    }
});

function showGuessForm() {
    const userGuessForm = document.getElementById('userguess');
    userGuessForm.classList.remove('hidden'); // Show the guess form
    userGuessForm.classList.add('visible'); // Add the sliding effect
}

function displayResult(isCorrect, number = null) {
    const resultMessage = document.getElementById('result-message');
    const resultSection = document.getElementById('result');

    // Clear any existing text and hide result section
    resultMessage.textContent = '';
    resultSection.classList.add('hidden');

    let messageText = '';
    if (isCorrect) {
        messageText = `Congratulations! You guessed the number: ${number}`;
    } else {
        messageText = 'Incorrect guess. Try again.';
    }

    // Display result and animate text if animation is not in progress
    if (!isAnimating) {
        resultSection.classList.remove('hidden');
        animateText(resultMessage, messageText);
    }
}

function animateText(element, text) {
    isAnimating = true; // Set flag to true while animating

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
        } else {
            isAnimating = false; // Reset flag when animation completes
        }
    }

    typeWriter();
}
