const wrongAnswerbtn2 = document.getElementById('btn-answer2')
const wrongAnswerbtn3 = document.getElementById('btn-answer3')
const wrongAnswerbtn4 = document.getElementById('btn-answer4')
const wrongAnswerbtn5 = document.getElementById('btn-answer5')
const wrongAnswerbtn6 = document.getElementById('btn-answer6')
const equation = document.getElementById("random-equation")
const gameOverScreen = document.getElementById('game-over').hidden = true;
document.getElementById("btn-start").addEventListener("click", startGame);
let counter = {
}

function problems() {
    counter.newProblem = toCalculate();
    equation.innerHTML = `${counter.newProblem.numb1} ${counter.newProblem.operator} ${counter.newProblem.numb2}`
}

function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}

function toCalculate() {
    return {
        numb1: randomNumber(14),
        numb2: randomNumber(14),
        operator: ['+', '-', 'x'][randomNumber(2)]
    }
}

function startGame() {
    shuffle();
    problems();
    answerbtn();
    correctAnswer();
    document.getElementById('btn-start').disabled = true;
}

function gameOver() {
    document.getElementById("board").classList.add = 'none';
    document.getElementById('btn-answer1').disabled = true;
    document.getElementById('game-over').hidden = false;
    document.getElementById('restart').addEventListener('click', resetGame);
}

function resetGame() {
    document.getElementById("btn-start").innerHTML = "new equation";
    document.getElementById("btn-start").disabled = false;
    document.getElementById('game-over').hidden = true;

}
function correctAnswer() {
    let rightAnswer
    if (counter.newProblem.operator === '+') {
        rightAnswer = counter.newProblem.numb1 + counter.newProblem.numb2
    } else if (counter.newProblem.operator === '-') {
        rightAnswer = counter.newProblem.numb1 - counter.newProblem.numb2
    } else if (counter.newProblem.operator === 'x')
        rightAnswer = counter.newProblem.numb1 * counter.newProblem.numb2

    const rightAnswerbtn = document.getElementById('btn-answer1')
    rightAnswerbtn.innerHTML = rightAnswer;
    rightAnswerbtn.addEventListener('click', startGame,);
}
function shuffle() {
    let ul = document.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }

}
function randomnumb() {
    let max = 196;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function answerbtn() {
    wrongAnswerbtn2.innerHTML = randomnumb();
    wrongAnswerbtn3.innerHTML = randomnumb();
    wrongAnswerbtn4.innerHTML = randomnumb();
    wrongAnswerbtn5.innerHTML = randomnumb();
    wrongAnswerbtn6.innerHTML = randomnumb();

    wrongAnswerbtn2.addEventListener('click', gameOver)
    wrongAnswerbtn3.addEventListener('click', gameOver)
    wrongAnswerbtn4.addEventListener('click', gameOver)
    wrongAnswerbtn5.addEventListener('click', gameOver)
    wrongAnswerbtn6.addEventListener('click', gameOver)
}

