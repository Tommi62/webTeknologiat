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
const bird2 = document.querySelector('.bird2');

const runAnimation = () => {
  let dogTimer = setTimeout(() => {
    dog.classList.add('fromleft');
  }, 50);

  let birdTimer = setTimeout(() => {
    bird1.classList.add('birdattack');
  }, 50);

  let bird2Timer = setTimeout(() => {
    bird2.classList.add('bird2fly');
  }, 50);

  let birdTimer2 = setTimeout(() => {
    bird1.classList.add('birdescape');
  }, 6000);

  let birdTimer3 = setTimeout(() => {
    bird1.classList.add('birdbacktonormal');
  }, 9000);
};

runAnimation();

setInterval(function(){
  dog.classList.remove('fromleft');
  bird1.classList.remove('birdattack');
  bird1.classList.remove('birdescape');
  bird1.classList.remove('birdbacktonormal');
  bird2.classList.remove('bird2fly');
  dog.classList.add('dog');
  bird1.classList.add('bird1');
  bird2.classList.add('bird2');
  runAnimation();
}, 11000);
