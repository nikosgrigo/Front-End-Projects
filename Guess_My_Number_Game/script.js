'use strict';

//select body element
const bodyel = document.querySelector('body');

//select button check + replay
const btnCheckNumber = document.querySelector('.check');
const btnRestartGame = document.querySelector('.again');

//other selectors
const messageLabel = document.querySelector('.message');
const inputGuessNumber = document.querySelector('.guess');
const divSecretNumber = document.querySelector('.number');
const highScoreSpan = document.querySelector('.highscore');
const scoreLabel = document.querySelector('.score');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  messageLabel.textContent = message;
};

btnCheckNumber.addEventListener('click', function () {
  const guess = Number(inputGuessNumber.value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    divSecretNumber.textContent = secretNumber; //Reveal the correct secret number

    bodyel.style.backgroundColor = '#33e04d';
    divSecretNumber.style.width = '20rem';

    if (score > highscore) {
      highscore = score;
      highScoreSpan.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreLabel.textContent = score; //
    } else {
      displayMessage('💥 You lost the game!');
      scoreLabel.textContent = 0;
      bodyel.style.backgroundColor = '#e03333';
    }
  }
});

const RestartGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreLabel.textContent = score;
  inputGuessNumber.value = '';

  bodyel.style.backgroundColor = '#0fac5b';

  divSecretNumber.textContent = '?';
  divSecretNumber.style.width = '15rem';
};
//Add listener to Restart Game button
btnRestartGame.addEventListener('click', RestartGame);
