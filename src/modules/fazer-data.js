import LunchMenuFazerFi from '../assets/fazer-week-fi.json';
import LunchMenuFazerEn from '../assets/fazer-week-en.json';
import { changeLanguage } from './sodexo-data';
let menuEn = [];
let menuFi = [];
const box = document.querySelector('#res2');
const button = document.querySelector('.fazerButton');
const button2 = document.querySelector('.fazerButton2');
const button3 = document.querySelector('.fazerButton3');
let sorted;
let language = false;
let sortFi = true;
let sortEn = true;
let selectedLanguage;

const createList = (languages) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML +='<li>' + language + '</li><br>';
  }
};

button.addEventListener('click', () => {
  if(language){
    createList(menuFi);
    language = false;
    console.log('True');
  }
  else {
    createList(menuEn);
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
      sorted = sortArray(menuFi, sortFi);
      createList(sorted);
      sortFi = false;
    }
    else{
      sorted = sortArray(menuFi, sortFi);
      createList(sorted);
      sortFi = true;
    }
  }
  else {
      if(sortEn){
        sorted = sortArray(menuEn, sortEn);
        createList(sorted);
        sortEn = false;
      }
      else{
        sorted = sortArray(menuEn, sortEn);
        createList(sorted);
        sortEn = true;
      }
}
});

const randomDish = () => {
  if(!language){
    selectedLanguage = menuFi;
  }
  else{
    selectedLanguage = menuEn;
  }

  let random = Math.floor(Math.random() * selectedLanguage.length);
  box.innerHTML = '';
  box.innerHTML = selectedLanguage[random];
};

button3.addEventListener('click', () => {
  randomDish();
});

const parseFazerMenu = (setMenus, lang) => {
    for(const setMenu of setMenus){
      for(const meals of setMenu.Meals){
        if(lang){
          menuFi.push(meals.Name);
        }else{
          menuEn.push(meals.Name);
        }
      }
    }
};

let lang = true;

const runParseFazerMenu = () =>{
  parseFazerMenu(LunchMenuFazerFi.LunchMenus[0].SetMenus, lang);
  lang = false;
  parseFazerMenu(LunchMenuFazerEn.LunchMenus[0].SetMenus, lang);
  createList(menuFi);
};

export {runParseFazerMenu};
