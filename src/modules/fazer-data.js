import LunchMenuFazerFi from '../assets/fazer-week-fi.json';
import LunchMenuFazerEn from '../assets/fazer-week-en.json';

const parseFazerMenu = (setMenus) => {
  let dailyMenu = setMenus.map(setMenu => {
    let mealName = setMenu.Name;
    let dishes = setMenu.Meals.map(dish => {
      return `${dish.Name} (${dish.Diets.join(', ')})`;
    });
    return mealName ? `${mealName}: ${dishes.join(', ')}` : dishes.join(', ');
  });
  return dailyMenu;
};

const runParseFazerMenu = (number, dayOfTheWeek) =>{
  if(number === 0){
    return parseFazerMenu(LunchMenuFazerFi.LunchMenus[dayOfTheWeek].SetMenus);
  }else{
    return parseFazerMenu(LunchMenuFazerEn.LunchMenus[dayOfTheWeek].SetMenus);
  }
};

export {runParseFazerMenu};
