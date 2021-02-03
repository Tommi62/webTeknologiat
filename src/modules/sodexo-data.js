let coursesEn = [];
let coursesFi = [];

const parseSodexoMenu = (data, number) => {
  console.log('SodexoData: ' + data.courses);
  const courses = Object.values(data.courses);
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
