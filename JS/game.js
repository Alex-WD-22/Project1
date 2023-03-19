const getElById = id => document.getElementById(id);
const addClickEventListener = (el, callback) => el.addEventListener('click', callback);

const wrongAnswerBtnIds = ['btn-answer2', 'btn-answer3', 'btn-answer4', 'btn-answer5', 'btn-answer6'];
const wrongAnswerButtons = wrongAnswerBtnIds.map(getElById);
const equation = getElById("random-equation");
const gameOverScreen = getElById('game-over').hidden = true;
addClickEventListener(getElById("btn-start"), startGame);
let counter = {};
displayTimeLeft(30);

let highScore = 0;


function updateHighScore() {
    getElById("high-score").innerHTML = `High Score: ${highScore}`;
}

function nextRound() {
    shuffle();
    problems();
    answerbtn();
    correctAnswer();
    updateHighScore();
}

function resetHighScore() {
    highScore = 0;
    updateHighScore();
}

function problems() {
    counter.newProblem = toCalculate();
    equation.innerHTML = `${counter.newProblem.numb1} ${counter.newProblem.operator} ${counter.newProblem.numb2}`;
}

function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}

function toCalculate() {
    return {
        numb1: randomNumber(14),
        numb2: randomNumber(14),
        operator: ['+', '-', 'x'][randomNumber(2)]
    };
}

let timer;

function startGame() {
    enableAnswerButtons();
    startTimer(30);
    shuffle();
    problems();
    answerbtn();
    correctAnswer();
    getElById('btn-start').disabled = true;
}

function startTimer(duration) {
    let timeLeft = duration;
    displayTimeLeft(timeLeft);
    timer = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            timeIsUp();
        } else {
            displayTimeLeft(timeLeft);
        }
    }, 1000);
}

function displayTimeLeft(time) {
    const timerDisplay = getElById("timer");
    timerDisplay.innerHTML = `Time Left: ${time}s`;
}

function timeIsUp() {
    gameOver();
    const timerDisplay = getElById("timer");
    timerDisplay.innerHTML = "Time is up!";
}

function gameOver() {
    disableAnswerButtons();
    getElById("board").classList.add = 'none';
    getElById('btn-answer1').disabled = true;
    getElById('game-over').hidden = false;
    addClickEventListener(getElById('restart'), resetGame);
}

function stopTimer() {
    clearInterval(timer);
}

function removeEventListeners() {
    getElById('btn-answer1').removeEventListener('click', nextRound);
    wrongAnswerButtons.forEach(button => {
        button.removeEventListener('click', gameOver);
    });
}

function resetGame() {
    stopTimer();
    getElById("btn-start").innerHTML = "new equation";
    getElById("btn-start").disabled = false;
    getElById('game-over').hidden = true;
    disableAnswerButtons(); 
    removeEventListeners(); 
    resetHighScore(); 
}

function nextRound() {
    shuffle();
    problems();
    answerbtn();
    correctAnswer();
}


function correctAnswer() {
    let rightAnswer;
    if (counter.newProblem.operator === '+') {
        rightAnswer = counter.newProblem.numb1 + counter.newProblem.numb2;
    } else if (counter.newProblem.operator === '-') {
        rightAnswer = counter.newProblem.numb1 - counter.newProblem.numb2;
    } else if (counter.newProblem.operator === 'x') {
        rightAnswer = counter.newProblem.numb1 * counter.newProblem.numb2;
    }

    const rightAnswerbtn = getElById('btn-answer1');
    rightAnswerbtn.innerHTML = rightAnswer;
    addClickEventListener(rightAnswerbtn, () => {
        highScore += 1; 
        updateHighScore(); 
        nextRound();
    });
}

function shuffle() {
    let ul = document.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}

function disableAnswerButtons() {
    getElById('btn-answer1').disabled = true;
    wrongAnswerButtons.forEach(button => {
        button.disabled = true;
    });
}

function enableAnswerButtons() {
    getElById('btn-answer1').disabled = false;
    wrongAnswerButtons.forEach(button => {
        button.disabled = false;
    });
}

function randomnumb() {
    let max = 196;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function answerbtn() {
    wrongAnswerButtons.forEach(button => {
        button.innerHTML = randomnumb();
        addClickEventListener(button, () => { 
            gameOver();
        });
    });
}
