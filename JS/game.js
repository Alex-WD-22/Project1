const equation = document.getElementById("random-equation")
 let checkAnswer = {
    wrongAnswers: 0,
    score: 0
}

function problems() {
    checkAnswer.newProblem = toCalculate();
    equation.innerHTML = `${checkAnswer.newProblem.numb1} ${checkAnswer.newProblem.operator} ${checkAnswer.newProblem.numb2}`
}
problems();

function randomNumber (number) {
    return Math.floor(Math.random() * (number + 1));
}

function toCalculate() {
    return  {
        numb1: randomNumber(14),
        numb2: randomNumber(14),
        operator: ['-','+','x','÷'] [randomNumber(2)]
    }
}
document.getElementById("btn-start").addEventListener("click", setTimer);
let totalTime;
let timer = 8;
function setTimer() {

    document.getElementById("btn-start").disabled = true;    
    toCalculate();
    let countdown = document.getElementById("timer")
    totalTime = setInterval(function() {
    timer -= 1;
    countdown.innerText ="Time Left:" + timer;
    if (timer < 0 ) {
        clearInterval(totalTime);
        gameOver();
        document.getElementById('btn-start').disabled = false;
    } 
    }, 1000);
    } 

function gameOver () {
    alert('Game Over');
}

function correctAnswer () {
let rightAnswer
    if (checkAnswer.newProblem.operator === '+') {
        rightAnswer = checkAnswer.newProblem.numb1 + checkAnswer.newProblem.numb2
    } else if (checkAnswer.newProblem.operator === '-') {
        rightAnswer = checkAnswer.newProblem.numb1 - checkAnswer.newProblem.numb2
    } else if (checkAnswer.newProblem.operator === 'x') {
        rightAnswer = checkAnswer.newProblem.numb1 * checkAnswer.newProblem.numb2
    } else if (checkAnswer.newProblem.operator === '÷') {
        rightAnswer = checkAnswer.newProblem.numb1 / checkAnswer.newProblem.numb2
    } else if (rightAnswer === `${checkAnswer.newProblem.numb1} ${checkAnswer.newProblem.operator} ${checkAnswer.newProblem.numb2}`) {
        problems();
    } else {
        alert('Wrong answer')
    }
    console.log(rightAnswer);
}

function randomnumb () {
    let max = 196;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
}

function answerbtn () {
const wrongAnswerbtn1 = document.getElementById('btn-answer1')
const wrongAnswerbtn2 = document.getElementById('btn-answer2')
const wrongAnswerbtn3 = document.getElementById('btn-answer3')
const wrongAnswerbtn4 = document.getElementById('btn-answer4')
const wrongAnswerbtn5 = document.getElementById('btn-answer5')
const wrongAnswerbtn6 = document.getElementById('btn-answer6')

wrongAnswerbtn1.innerHTML = randomnumb();
wrongAnswerbtn2.innerHTML = randomnumb();
wrongAnswerbtn3.innerHTML = randomnumb();
wrongAnswerbtn4.innerHTML = randomnumb();
wrongAnswerbtn5.innerHTML = randomnumb();
wrongAnswerbtn6.innerHTML = randomnumb();

}
answerbtn();


