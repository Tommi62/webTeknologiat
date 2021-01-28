import Lunchmenu2 from './assets/fazer-week-example.json';
import {changeLanguage, parseSodexoMenu} from './modules/sodexo-data';
import {runParseFazerMenu} from './modules/fazer-data';



const coursesFi = parseSodexoMenu();
changeLanguage(coursesFi);

runParseFazerMenu();

//i.
const activateCheatCode = () => {
  let code = ['h','e','l','l','o'];

  document.addEventListener('keydown', event => {
    console.log('keydown:', event.key);
    if (event.key === code[0]) {
      console.log('Pass');
      code.shift();
      if(code.length === 0){
        alert('Well done!');
        code = ['h','e','l','l','o'];
      }
    }else{
      code = ['h','e','l','l','o'];
    }
  });
};

activateCheatCode();

//ii.
const element = document.querySelector('.element');
const showCoordinates = () => {
  document.addEventListener('dblclick', event => {
  console.log('X: ' + event.clientX + ', Y: ' + event.clientY);
  element.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;
  });
};

showCoordinates();

//iii.
const touchFunction = () =>{
  element.addEventListener('touchstart', event => {
    console.log('You touched me!');
  });
};

touchFunction();

//iv.
const activateHurryUp = () => {
  setTimeout(() => element.innerHTML = 'Hurry up!', 15000);
};

activateHurryUp();

//v.
const activateIdleTimer = () => {
  const element2 = document.querySelector('#element');
  let timer = setTimeout(() => element2.innerHTML = 'Hurry up!!', 15000);

  document.addEventListener('mousemove', event => {
    resetTimer();
  });

  document.addEventListener('keydown', event => {
    resetTimer();
  });

  document.addEventListener('scroll', event => {
    resetTimer();
  });

  document.addEventListener('click', event => {
    resetTimer();
  });

  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => element2.innerHTML = 'Hurry up!!', 15000);
    element2.innerHTML = '';
  };
};

activateIdleTimer();

