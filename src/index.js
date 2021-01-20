import Lunchmenu from './assets/sodexo-menu.json';
import Lunchmenu2 from './assets/fazer-week-example.json';
console.log(Lunchmenu);
let coursesEn = [];
let coursesFi = [];
const box = document.querySelector('#res1');
const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
let sorted;
let language = false;
let sortFi = true;
let sortEn = true;
let selectedLanguage;

const changeLanguage = (languages) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

button.addEventListener('click', () => {
  if(language){
    changeLanguage(coursesFi);
    language = false;
    console.log('True');
  }
  else {
    changeLanguage(coursesEn);
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
      sorted = sortArray(coursesFi, sortFi);
      changeLanguage(sorted);
      sortFi = false;
    }
    else{
      sorted = sortArray(coursesFi, sortFi);
      changeLanguage(sorted);
      sortFi = true;
    }
  }
  else {
      if(sortEn){
        sorted = sortArray(coursesEn, sortEn);
        changeLanguage(sorted);
        sortEn = false;
      }
      else{
        sorted = sortArray(coursesEn, sortEn);
        changeLanguage(sorted);
        sortEn = true;
      }
}
});

const randomDish = () => {
  if(!language){
    selectedLanguage = coursesFi;
  }
  else{
    selectedLanguage = coursesEn;
  }

  let random = Math.floor(Math.random() * selectedLanguage.length);
  box.innerHTML = '';
  box.innerHTML = selectedLanguage[random];
};

button3.addEventListener('click', () => {
  randomDish();
});

const parseSodexoMenu = (sodexoDailyMenu) => {
  const courses = Object.values(sodexoDailyMenu);
  for(const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};

parseSodexoMenu(Lunchmenu.courses);
changeLanguage(coursesFi);

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






