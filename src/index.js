import Lunchmenu2 from './assets/fazer-week-example.json';
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

const changeLanguage = (languages, box) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

const sodexoFi = parseSodexoMenu(0);
const sodexoEn = parseSodexoMenu(1);
changeLanguage(sodexoFi, box);

const fazerFi = runParseFazerMenu(0);
const fazerEn = runParseFazerMenu(1);
console.log('Suomeksi: ' + fazerFi);
console.log('Englanniksi: ' + fazerEn);
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
      sorted = sortArray(sodexoFi, sortFi);
      changeLanguage(sorted, box);
      sorted = sortArray(fazerFi, sortFi);
      changeLanguage(sorted, box2);
      sortFi = false;
    }
    else{
      sorted = sortArray(sodexoFi, sortFi);
      changeLanguage(sorted, box);
      sorted = sortArray(fazerFi, sortFi);
      changeLanguage(sorted, box2);
      sortFi = true;
    }
  }
  else {
      if(sortEn){
        sorted = sortArray(sodexoEn, sortEn);
        changeLanguage(sorted, box);
        sorted = sortArray(fazerEn, sortEn);
        changeLanguage(sorted, box2);
        sortEn = false;
      }
      else{
        sorted = sortArray(sodexoEn, sortEn);
        changeLanguage(sorted, box);
        sorted = sortArray(fazerEn, sortEn);
        changeLanguage(sorted, box2);
        sortEn = true;
      }
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

/*
//Week2-Task2

const meals = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

//1.
const name = 'Ifa,l(fs af)a/f-s9';

const validateName = (name) => {
  const regEx = /^[A-ZÖÄÅ]{1}[a-zöäå0-9\s,\/\(\)._-]{4,64}$/;
  return regEx.test(name);
};

const result = validateName(name);
console.log('Tulos: ' + result);

//2.
  let sortPrice = meals.sort((a, b) => {
  return b.price - a.price;
  });

console.log(sortPrice);

//3.
const filtered = meals.filter(meal => meal.price < 5);
console.log(filtered);

//4.
const multiplied = meals.map(meal => meal.price*1.15);
console.log(multiplied);

//5.
const reduced = meals.reduce((a, b) => ({price: a.price + b.price}));
console.log(reduced);

//Advanced
const filterVeganMeals = (setMenus) => {
  let filteredMenu = [];
  for(const setMenu of setMenus){
    for(const meals of setMenu.Meals){
      if(meals.Diets.includes('Veg')){
        filteredMenu.push(meals.Name);
      }
    }
  }
  return filteredMenu;
};

const veganMeals = filterVeganMeals(Lunchmenu2.LunchMenus[0].SetMenus);
console.log('Vegan meals: ' + veganMeals);
*/





