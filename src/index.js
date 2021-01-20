import Lunchmenu from './assets/sodexo-menu.json';
import Lunchmenu2 from './assets/fazer-week-example.json';
import LunchMenuFazerFi from './assets/fazer-week-fi.json';
import LunchMenuFazerEn from './assets/fazer-week-en.json';
import {changeLanguage, parseSodexoMenu} from './modules/SodexoData';
import {createList, parseFazerMenu} from './modules/FazerData';



const coursesFi = parseSodexoMenu(Lunchmenu.courses);
changeLanguage(coursesFi);

let lang = true;
const menuFi = parseFazerMenu(LunchMenuFazerFi.LunchMenus[0].SetMenus, lang);
lang = false;
parseFazerMenu(LunchMenuFazerEn.LunchMenus[0].SetMenus, lang);
createList(menuFi);

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





