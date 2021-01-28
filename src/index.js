import {parseSodexoMenu} from './modules/sodexo-data';
import {runParseFazerMenu} from './modules/fazer-data';
const box = document.querySelector('#res1');
const box2 = document.querySelector('#res2');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
let sorted;
let language = false;
let sortFi = true;
let sortEn = true;
let selectedLanguage;
let selectedLanguage2;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};

const changeLanguage = (languages, box) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

const sodexoFi = parseSodexoMenu(0);
const sodexoEn = parseSodexoMenu(1);
changeLanguage(sodexoFi, box);

const fazerFi = runParseFazerMenu(0, 0);
const fazerEn = runParseFazerMenu(1, 0);
changeLanguage(fazerFi, box2);

button.addEventListener('click', () => {
  if(language){
    changeLanguage(sodexoFi, box);
    changeLanguage(fazerFi, box2);
    language = false;
    console.log('True');
  }
  else {
    changeLanguage(sodexoEn, box);
    changeLanguage(fazerEn, box2);
    language = true;
    console.log('False');
  }
});

const sortArray = (menu, order) =>{
  if(order){
    menu.sort();
  }
  else{
    menu.sort();
    menu.reverse();
  }
  return menu;
};

button2.addEventListener('click', () => {
  if(!language){
    if(sortFi){
      sortFi = false;
    }
    else{
      sortFi = true;
    }
    sorted = sortArray(sodexoFi, sortFi);
    changeLanguage(sorted, box);
    sorted = sortArray(fazerFi, sortFi);
    changeLanguage(sorted, box2);
  }
  else {
    if(sortEn){
      sortEn = false;
    }
    else{
      sortEn = true;
    }
    sorted = sortArray(sodexoEn, sortEn);
    changeLanguage(sorted, box);
    sorted = sortArray(fazerEn, sortEn);
    changeLanguage(sorted, box2);
  }
});

const randomDish = () => {
  if(!language){
    selectedLanguage = sodexoFi;
    selectedLanguage2 = fazerFi;
  }
  else{
    selectedLanguage = sodexoEn;
    selectedLanguage2 = fazerEn;
  }

  let random = Math.floor(Math.random() * selectedLanguage.length);
  box.innerHTML = '';
  box.innerHTML = selectedLanguage[random];

  random = Math.floor(Math.random() * selectedLanguage2.length);
  box2.innerHTML = '';
  box2.innerHTML = selectedLanguage2[random];
};

button3.addEventListener('click', () => {
  randomDish();
});





