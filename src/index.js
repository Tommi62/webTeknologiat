import {sodexoAddress, parseSodexoMenu} from './modules/sodexo-data';
import {fazerAddressFi, fazerAddressEn, runParseFazerMenu} from './modules/fazer-data';
import {getMenus} from './modules/network-features';
const box = document.querySelector('#res1');
const box2 = document.querySelector('#res2');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
let sorted;
let language = false;
let sortFi = false;
let sortEn = false;
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

let mode = localStorage.getItem('mode');
if(mode === 'dark'){
  document.body.classList.toggle('dark-theme');
}
button4.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if(document.body.classList.contains('dark-theme')){
    localStorage.setItem('mode', 'dark');
  } else{
    localStorage.setItem('mode', 'light');
  }
});

const closeBtns = document.getElementsByClassName('close');
for(const closeBtn of closeBtns){
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeBtn.parentElement.style.display = 'none';
    adjustBtns(2);
  });
}

const addBtn = document.querySelector('.addButton');
const restaurants = document.getElementsByClassName('restaurants');
const btns = document.querySelector('.buttons');

addBtn.addEventListener('click', () => {
  btns.style.display = 'flex';
  for(const restaurant of restaurants){
    if(restaurant.style.display === 'none'){
      restaurant.style.display = 'block';
      break;
    }
  }
  adjustBtns(2);
});

const adjustBtns = (number) => {
  let count = 0;
  let index = 0;
  let oneOrTwo;
  for(const restaurant of restaurants){
    index++;
    if(restaurant.style.display === 'none'){
      count++;
      oneOrTwo = index;
    }
  }
  if(count === number){
    btns.style.display = 'none';
    addBtn.style.display = 'flex';
    localStorage.setItem('restaurants', 0);
  } else if(count === 0){
    addBtn.style.display = 'none';
    localStorage.setItem('restaurants', 3);
  } else{
    addBtn.style.display = 'flex';
    localStorage.setItem('restaurants', oneOrTwo);
    console.log('Item: ' + localStorage.getItem('restaurants'));
  }
};

const restaurantSettings = () => {
  let situation = parseInt(localStorage.getItem('restaurants'));
  let index = 0;
  if(situation == 1 || situation == 2){
    for(const restaurant of restaurants){
      index++;
      if(index === situation){
        restaurant.style.display = 'none';
      }
    }
  }else if(situation === 0){
    for(const restaurant of restaurants){
      restaurant.style.display = 'none';
    }
  }
};

const changeLanguage = (languages, box) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

let today = new Date();
let fazerToday;
let dayOfTheWeek;

const getDate = (date) => {
  let dd = date.getDate();
  let mm = date.getMonth()+1;
  let yyyy = date.getFullYear();
  if(dd<10)
  {
      dd='0'+dd;
  }

  if(mm<10)
  {
      mm='0'+mm;
  }
  dayOfTheWeek = date.getDay() - 1;
  console.log('WeekDay: ' + dayOfTheWeek);
  today = yyyy+'-'+mm+'-'+dd;
  fazerToday = yyyy - 1 +'-'+mm+'-'+dd;
};

let sodexoFi;
let sodexoEn;
let fazerFi;
let fazerEn;

const getSodexoData = async () =>{
  try{
    const address = sodexoAddress + today;
    const data = await getMenus(address);
    sodexoFi = parseSodexoMenu(data, 0);
    sodexoEn = parseSodexoMenu(data, 1);
    changeLanguage(sodexoFi, box);
  } catch (error) {
    console.error('getSodexoData error', error.message);
  }
};

const getFazerData = async () => {
  try{
    let address = fazerAddressFi + fazerToday;
    const dataFi = await getMenus(address);
    address = fazerAddressEn + fazerToday;
    const dataEn = await getMenus(address);
    fazerFi = runParseFazerMenu(dataFi, dayOfTheWeek);
    fazerEn = runParseFazerMenu(dataEn, dayOfTheWeek);
    changeLanguage(fazerFi, box2);
  } catch (error) {
    console.error('getFazeroData error', error.message);
  }
};

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

/*Seuraava pätkä mahdollistaa saman viikon muiden arkipäivien (ma-pe) ruokalistojen hakemisen sytöttämällä
kyseisen päivän nimen joko suomeksi tai englanniksi hakukenttään ja painamalla suurennuslasia (ns. haku-nappia).
Jos käyttäjä yrittää hakea jotain muuta, tulee alert joka ilmoittaa, että mitään ei löytynyt joko suomeksi tai
englanniksi riippuen siitä kumpi kieli on juuri silloin valittuna.*/

const daysOfTheWeekFi = [
  'maanantai',
  'tiistai',
  'keskiviikko',
  'torstai',
  'perjantai'
];

const daysOfTheWeekEn = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday'
];

const changeDay = (targetIndex) => {
  let now = new Date();
  let nowIndex = now.getDay() -1;
  let targetDay = targetIndex - nowIndex;
  now.setDate(now.getDate() + targetDay);
  console.log('NOW: ' + now);
  getDate(now);
  getSodexoData();
  getFazerData();
  resetValues();
};
const input = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');

searchButton.addEventListener('click', () =>{
  const value = input.value.toLowerCase();
  if(daysOfTheWeekFi.includes(value)){
    changeDay(daysOfTheWeekFi.indexOf(value));
    console.log('Click detected');
  }else if(daysOfTheWeekEn.includes(value)){
    changeDay(daysOfTheWeekEn.indexOf(value));
  }else{
    if(!language){
      alert('Ei hakutuloksia.');
    }else{
      alert('No results found.');
    }
  }
});

const resetValues = () => {
  language = false;
  sortFi = false;
  sortEn = false;
};

const init = () => {
  restaurantSettings();
  adjustBtns(2);
  getDate(today);
  getSodexoData();
  getFazerData();
};

init();
