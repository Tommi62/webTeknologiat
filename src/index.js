import {parseSodexoMenu} from './modules/sodexo-data';
import {runParseFazerMenu} from './modules/fazer-data';
import {getMenus} from './modules/network-features';
const box = document.querySelector('#res1');
const box2 = document.querySelector('#res2');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
let sorted;
let language = false;
let sortFi = false;
let sortEn = false;
let selectedLanguage;
let selectedLanguage2;

const sodexoAddress = 'https://www.sodexo.fi/ruokalistat/output/daily_json/152/';
const fazerAddressFi = 'https://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=';
const fazerAddressEn = 'https://cors-anywhere.herokuapp.com/https://www.fazerfoodco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};

const changeNavBar = () => {
  let x = document.querySelector('.navbar');
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
};

const navIcon = document.querySelector('.icon');
navIcon.addEventListener('click', () => {
  console.log('Click');
  changeNavBar();
});

const changeLanguage = (languages, box) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
const dayOfTheWeek = today.getDay() - 1;
console.log('WeekDay: ' + dayOfTheWeek);
today = yyyy+'-'+mm+'-'+dd;
const fazerToday = yyyy - 1 +'-'+mm+'-'+dd;
console.log(today);
console.log(fazerToday);

let sodexoFi;
let sodexoEn;
let fazerFi;
let fazerEn;

const getSodexoData = async () =>{
  const address = sodexoAddress + today;
  const data = await getMenus(address);
  sodexoFi = parseSodexoMenu(data, 0);
  sodexoEn = parseSodexoMenu(data, 1);
  changeLanguage(sodexoFi, box);
};

getSodexoData();

const getFazerData = async () => {
  let address = fazerAddressFi + fazerToday;
  const dataFi = await getMenus(address);
  address = fazerAddressEn + fazerToday;
  const dataEn = await getMenus(address);
  fazerFi = runParseFazerMenu(dataFi, dayOfTheWeek);
  fazerEn = runParseFazerMenu(dataEn, dayOfTheWeek);
  changeLanguage(fazerFi, box2);
};

getFazerData();

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



