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
let guessHistory = [];

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
let isItHigher;
let guessesNeeded = [];

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
  guessHistory.push(userGuess);

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    endTime = Date.now();
    timeSpent = (endTime - startTime) / 1000;
    lowOrHi.textContent = 'Time spent: ' + timeSpent + ' seconds' + ', guesses needed: ' + guessCount;
    guessesNeeded.push(guessCount);
    setGameOver();
  } else if (guessCount === maximumCount) {
    lastResult.textContent = '!!!GAME OVER!!!';
    endTime = Date.now();
    timeSpent = endTime - startTime;
    lowOrHi.textContent = 'Time spent: ' + timeSpent + ' seconds' + ', guesses needed: ' + guessCount;
    guessesNeeded.push(guessCount);
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
      isItHigher = true;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      isItHigher = false;
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


//Week2-task1


const medium = Math.floor((lowestNumber + highestNumber)/2);
let computerCount = 0;
let guess;
let changeMode = false;
let minValue;
let maxValue;
const computerPlayer = () => {
  //Looppi pyörii niin kauan kun input johon arvauksia syötetään on aktiivinen.
  //Kun tämä input deaktivoidaan, kone tietää, että peli on ohi ja lopettaa loopin.
  while(guessField.disabled === false){
    //Ensimmäisellä arvauskerralla kokeillaan ylärajan ja alarajan alaspäin pyöristettyä keskiarvoa.
    //Jokaisella arvauskerralla laitetaan arvaus inputin arvoksi ja kutsutaan checkGuess -funktiota.
    //CheckGuess -funktio tarkistaa onko arvaus oikein ja jos ei ole, kertoo onko oikea vastaus korkeampi vai matalampi.
    if(computerCount === 0){
      guess = medium;
      guessField.value = guess;
      checkGuess();
    }else {
      //IsItHigher -booleanin arvo kertoo oliko edellinen arvaus liian matala vai liian korkea.
      /*
        Mikäli edellinen arvaus oli suurempi tai yhtä suuri kuin rajojen keskiarvo ja oikea vastaus on tätä suurempi
        ja lisäksi oikea vastaus on ollut koko ajan suurempi kuin arvaus, merkitään edellinen arvaus minimiarvoksi ja
        arvataan edellisen arvauksen ja ylärajan keskiarvon ylöspäin pyöristettyä arvoa.
        Ylöspäin pyöristettyä arvoa käytetään tässä siksi, että jos oikea vastaus on yläraja ei alaspäin pyöristämällä
        voida saada tällä metodilla oikeaa vastausta.
      */
      if(guess >= medium && isItHigher && !changeMode){
        minValue = guess;
        guess = Math.ceil((guess + highestNumber)/2);
      }
      /*
          Seuraava else if -toimii muuten samalla tavalla kuin edellinen, mutta toiseen suuntaan. Eli jos edellinen
          arvaus oli matalampi kuin rajojen keskiarvo ja oikea vastaus on tätä pienempi
          ja lisäksi oikea vastaus on ollut koko ajan pienempi kuin arvaus, merkitään edellinen arvaus maksimiarvoksi ja
          arvataan edellisen arvauksen ja alarajan keskiarvon alaspäin pyöristettyä arvoa.
      */
     //ChangeMode:n ollessa false kaikki arvaukset ovat koko ajan olleet ainoastaan liian matalia tai vaihtoehtoisesti liian korkeita.
      else if(guess <= medium && !isItHigher && !changeMode){
        maxValue = guess;
        guess = Math.floor((guess + lowestNumber)/2);
      }
      /*
        Jos edellinen arvaus oli suurempi kuin keskiarvo ja liian korkea tai vaihtoehtoisesti suunta oikeaa
        vastausta kohti on vaihtunut jo aikaisemmin ja edellinen arvaus oli liian korkea, laitetaan kyseinen
        arvo maksimiarvoksi ja arvataan maksimiarvon ja minimiarvon alaspäin pyöristettyä keskiarvoa.
        Vaihdetaan myös changeMode:n arvoksi true, jotta tiedetään, että suunta oikeaa vastausta kohti on muuttunut.
      */
      else if(guess > medium && !isItHigher || changeMode && !isItHigher){
        maxValue = guess;
        guess = Math.floor((maxValue + minValue)/2);
        changeMode = true;
      }
      /*
        Jos edellinen arvaus oli pienempi kuin keskiarvo ja liian matala tai vaihtoehtoisesti suunta oikeaa
        vastausta kohti on vaihtunut jo aikaisemmin ja edellinen arvaus oli liian matala, laitetaan kyseinen
        arvo minimiiarvoksi ja arvataan maksimiarvon ja minimiarvon alaspäin pyöristettyä keskiarvoa.
        Vaihdetaan myös changeMode:n arvoksi true, jotta tiedetään, että suunta oikeaa vastausta kohti on muuttunut.
      */
      else if(guess < medium && isItHigher || changeMode && isItHigher){
        minValue = guess;
        guess = Math.floor((maxValue + minValue)/2);
        changeMode = true;
      }
      //Laitetaan jonkin else if:n sisällä määritelty arvaus inputin arvoksi ja kutsutaan checkGuess-funktiota.
      guessField.value = guess;
      checkGuess();
    }
    //Kertoo arvauskertojen määrän.
    computerCount++;
  }
  computerCount = 0;
  changeMode = false;
};

//Algoritmin testaus
const howManyTimes = 1200;

const testComputerPlayer = (howManyTimes) => {
  for(let i = 0; i < howManyTimes; i++){
    computerPlayer();
    resetGame();

  }
  console.log(guessesNeeded);
  const sum = guessesNeeded.reduce((acc, current) => acc + current);
  const average = sum/howManyTimes;
  console.log('Average number of total guess count: ' + average); //Tulos: n. 4.5 arvausta.
  console.log('Max guess count value: ' + Math.max(...guessesNeeded)); //Tulos: 6 arvausta.
  console.log('Min guess count value: ' + Math.min(...guessesNeeded)); // Tulos: 1 arvaus.
};

testComputerPlayer(howManyTimes);

