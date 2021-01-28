let mouse = document.querySelector('#mouse');
let mouseCenter = document.querySelector('#mouse-center');
const layerOne = document.querySelector('.layer-1');
let onOrOff = true;
let centerX;
let centerY;
let invertedX;
let invertedY;

document.addEventListener('mousemove', (event) => {
  mouse.innerHTML = 'From the top left <br> X: ' + event.clientX + ', Y: ' + event.clientY;
  centerX = event.clientX - window.innerWidth/2;
  centerY = -(event.clientY - window.innerHeight/2);
  mouseCenter.innerHTML = 'From the center <br> X: ' + centerX + ', Y: ' + centerY;
});

document.addEventListener('mousemove', (event) => {
  if(onOrOff){
    invertedX = -(event.clientX - window.innerWidth/2);
    invertedY = -(event.clientY - window.innerHeight/2);
    layerOne.style.transform = 'translateX(' + invertedX/2000 + '%) translateY(' + invertedY/2000 + '%)';
  }
});

document.addEventListener('dblclick', (event) => {
  if (onOrOff) {
    onOrOff = false;
  }else{
    onOrOff = true;
  }
});

console.log(window.innerWidth, window.innerHeight);
