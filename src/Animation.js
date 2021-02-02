/*const header = document.querySelector('.duckhunt-h1');
window.addEventListener('scroll', () => {
  let sticky = header.offsetTop;

  if(window.pageYOffset > sticky){
    header.classList.add('sticky');
  }else{
    header.classList.remove('sticky');
  }
});*/
const dog = document.querySelector('.dog');
const bird1 = document.querySelector('.bird1');

let dogTimer = setTimeout(() => {
  dog.classList.add('fromleft');
}, 50);

let birdTimer = setTimeout(() => {
  bird1.classList.add('birdattack');
}, 50);

let birdTimer2 = setTimeout(() => {
  bird1.classList.add('birdescape');
}, 6000);

let birdTimer3 = setTimeout(() => {
  bird1.classList.add('birdbacktonormal');
}, 9000);
