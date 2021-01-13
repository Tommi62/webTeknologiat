const lowestNumber = 30;
const highestNumber = 70;
const maximumCount = 10;

let startTime;
let endTime;
let timeSpent;

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const container = document.querySelector('.container');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

const checkGuess = () => {
  while(randomNumber < lowestNumber || randomNumber > highestNumber){
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    startTime = Date.now();
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    endTime = Date.now();
    timeSpent = (endTime - startTime) / 1000;
    lowOrHi.textContent = 'Time spent: ' + timeSpent + ' seconds' + ', guesses needed: ' + guessCount;
    setGameOver();
  } else if (guessCount === maximumCount) {
    lastResult.textContent = '!!!GAME OVER!!!';
    endTime = Date.now();
    timeSpent = endTime - startTime;
    lowOrHi.textContent = 'Time spent: ' + timeSpent + ' seconds' + ', guesses needed: ' + guessCount;
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};

guessSubmit.addEventListener('click', checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  container.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
};
