const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

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

const changeLanguage = (languages) => {
  box.innerHTML = '';
  for(const language of languages){
    box.innerHTML += language + '<br><br>';
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

const randomDish = () => {
  if(!language){
    selectedLanguage = coursesFi;
  }
  else{
    selectedLanguage = coursesEn;
  }

  let random = Math.floor(Math.random() * selectedLanguage.length);
  box2.innerHTML = selectedLanguage[random];
};

button3.addEventListener('click', () => {
  randomDish();
});

changeLanguage(coursesFi);








