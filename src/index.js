import Lunchmenu from './assets/sodexo-menu.json';
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








