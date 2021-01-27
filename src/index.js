import Lunchmenu2 from './assets/fazer-week-example.json';
import {changeLanguage, parseSodexoMenu} from './modules/sodexo-data';
import {runParseFazerMenu} from './modules/fazer-data';



const coursesFi = parseSodexoMenu();
changeLanguage(coursesFi);

runParseFazerMenu();

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

//i.
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

//ii.
document.addEventListener('dblclick', event => {
  console.log('X: ' + event.clientX + ', Y: ' + event.clientY);
});

//iii.
const element = document.querySelector('.element');

element.addEventListener('mouseover', event => {
  console.log('You touched me!');
});

//iv.
setTimeout(() => element.innerHTML = 'Hurry up!', 15000);

//v.
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
  console.log('Works');
  clearTimeout(timer);
  timer = setTimeout(() => element2.innerHTML = 'Hurry up!!', 15000);
  element2.innerHTML = '';
};
