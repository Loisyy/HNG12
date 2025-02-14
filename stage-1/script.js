let targetColor;
let score = 0;

// DOM element selectors
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to set up a new game
function setupNewGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;


    const colors = [targetColor];
    while (colors.length < 6) {
        const newColor = getRandomColor();
        if (!colors.includes(newColor)) {
            colors.push(newColor);
        }
    }


    colors.sort(() => Math.random() - 0.5);


    colorOptions.forEach((option, index) => {
        option.style.backgroundColor = colors[index];
    });


    gameStatus.textContent = '';
}

// Function to check if the guessed color is correct
function checkGuess(guessedColor) {
    if (guessedColor === targetColor) {

        gameStatus.textContent = 'Wow Correct';
        gameStatus.style.color = 'green';
        gameStatus.classList.add('fade');
        score++;
        scoreElement.textContent = score;
        setTimeout(setupNewGame, 1000);
    } else {

        gameStatus.textContent = 'Try Again';
        gameStatus.style.color = 'red';
        gameStatus.classList.add('fade');
    }
}

// Event listeners
gameStatus.addEventListener('animationend', () => {
    gameStatus.classList.remove('fade');
});


colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const guessedColor = option.style.backgroundColor;
        checkGuess(guessedColor);
    });
});


newGameButton.addEventListener('click', () => {
    score = 0;
    scoreElement.textContent = score; localStorage
    setupNewGame();
});

setupNewGame();
