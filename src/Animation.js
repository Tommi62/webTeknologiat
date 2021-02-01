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

let dogTimer = setTimeout(() => {
  dog.classList.add('fromleft');
}, 50);
