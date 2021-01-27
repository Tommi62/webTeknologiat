import Lunchmenu from '../assets/sodexo-menu.json';
let coursesEn = [];
let coursesFi = [];

const parseSodexoMenu = (number) => {
  const courses = Object.values(Lunchmenu.courses);
  coursesEn = [];
  coursesFi = [];
  for(const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
  if(number === 0){
    return coursesFi;
  }else{
    return coursesEn;
  }

};

export {parseSodexoMenu};
