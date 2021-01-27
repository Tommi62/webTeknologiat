import LunchMenuFazerFi from '../assets/fazer-week-fi.json';
import LunchMenuFazerEn from '../assets/fazer-week-en.json';
let menuEn = [];
let menuFi = [];

const parseFazerMenu = (setMenus, lang) => {
    menuEn = [];
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

const runParseFazerMenu = (number) =>{
  parseFazerMenu(LunchMenuFazerFi.LunchMenus[0].SetMenus, lang);
  lang = false;
  parseFazerMenu(LunchMenuFazerEn.LunchMenus[0].SetMenus, lang);
  if(number === 0){
    return menuFi;
  }else{
    return menuEn;
  }
};

export {runParseFazerMenu};
