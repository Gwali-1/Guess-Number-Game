'use strict';

// variables for user score, current highscore and variable to guess
let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function to check guessed number against generated number
const checkNumbers = function (num1, num2) {
  if (num1 === num2) {
    return 0;
  } else if (num1 !== num2) {
    return 1;
  }
};

//function to display message
const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.guess').value);
  console.log(typeof guessed);
  //when there is no input
  if (!guessed) {
    // document.querySelector('.message').textContent = '⛔️ Enter Valid Number (Between 1 and 20) ';
    displayMessage('⛔️ Enter Valid Number (Between 1 and 20)');
  } else if (guessed) {
    //if guessed number is same
    if (checkNumbers(guessed, secreteNumber) === 0) {
      displayMessage('🎉 Correct Number');
      document.querySelector('.number').textContent = secreteNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = String(highScore);
      }
    } else if (checkNumbers(guessed, secreteNumber) !== 0) {
      if (score > 1) {
        displayMessage(guessed > secreteNumber ? '📈 Too High' : '📉 Too low ');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = ' ❌ You lost game';
        displayMessage(' ❌ You lost game');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreteNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('start guessing ..');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
