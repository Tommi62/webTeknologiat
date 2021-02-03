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

const runParseFazerMenu = (menu, dayOfTheWeek) =>{
    return parseFazerMenu(menu.LunchMenus[dayOfTheWeek].SetMenus);
};

export {runParseFazerMenu};
