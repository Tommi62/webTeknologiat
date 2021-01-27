let mouse = document.querySelector('#mouse');
let mouseCenter = document.querySelector('#mouse-center');
const layerOne = document.querySelector('.layer-1');

document.addEventListener('mousemove', (event) => {
  mouse.innerHTML = 'From the top left <br> X: ' + event.clientX + ', Y: ' + event.clientY;
});

let centerX;
let centerY;
document.addEventListener('mousemove', (event) => {
  centerX = event.clientX - window.innerWidth/2;
  centerY = event.clientY - window.innerHeight/2;
  mouseCenter.innerHTML = 'From the center <br> X: ' + centerX + ', Y: ' + centerY;
  layerOne.style.transform = 'translateX(' + centerX/2000 + '%) translateY(' + centerY/2000 + '%)';
});

console.log(window.innerWidth, window.innerHeight);
