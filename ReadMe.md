<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f2f2f2;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        p {
            color: #666;
        }
        code {
            background-color: #f2f2f2;
            padding: 2px 4px;
            border-radius: 4px;
        }
        .code-example {
            background-color: #f7f7f7;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Guessing Game</h1>
        
        <h2>Description</h2>
        <p>A simple guessing game implemented using HTML, CSS, and JavaScript.</p>
        
        <h2>How to Play</h2>
        <ol>
            <li>Enter a range of numbers in the form provided.</li>
            <li>Click "PLAY" to start the game.</li>
            <li>Guess the number within the specified range.</li>
            <li>Receive feedback on whether your guess is correct or not.</li>
            <li>Keep guessing until you find the correct number!</li>
        </ol>
        
        <h2>Technologies Used</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        
        <h2>Code Example</h2>
        <div class="code-example">
            <h3>JavaScript: Guess Logic</h3>
            <pre><code>
document.getElementById('userguess').addEventListener('submit', function(event) {
    event.preventDefault();
    const guessValue = parseInt(document.getElementById('guess').value);

    if (guessValue === numberToGuess) {
        displayResult(true, numberToGuess);
    } else {
        displayResult(false);
    }
});
            </code></pre>
        </div>
        
        <h2>Contributing</h2>
        <p>Contributions are welcome! Fork the repository and submit a pull request.</p>
        
        <h2>License</h2>
        <p>This project is licensed under the MIT License - see the <a href="#">LICENSE</a> file for details.</p>
    </div>
</body>
</html>
