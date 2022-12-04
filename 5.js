console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;

const createContainer = function() {
  element = createElement('div');

  element.setAttribute('id', 'carousel')
  element.setAttribute('class', 'carousel');
  
  document.querySelector('body').appendChild(element);

  container = document.querySelector('#carousel');
}

const createSlides = function(slidesCount) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for(let i = 0; i < slidesCount; i++) {
    slidesItem = document.createElement('li');
    slidesLink = document.createElement('a');

    slidesItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');

    slidesLink.setAttribute('href', '#');
    slidesItem.appendChild(slidesLink);
    slidesContainer.appendChild(slidesItem);
  }
  container.appendChild(slidesContainer);
}

const createIndicators = function(indicatorsCount) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for(let i = 0; i < indicatorsCount; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);

    indicatorsContainer.appendChild(indicatorsItem);
  }
  container.appendChild(indicatorsContainer);
}

const createControls = function() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');



  for (let i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');

    switch(i) {
      case 0:  
        controlsItem.setAttribute('class', 'controls__item controls__prev');
        controlsIcon.setAttribute('class', 'fas fa-chevron-left');
        break;
      case 1:
        controlsItem.setAttribute('class', 'controls__item controls__next');
        controlsIcon.setAttribute('class', 'fas fa-chevron-right');
        break;
      case 2:
        controlsItem.setAttribute('class', 'controls__item controls__pause');
        controlsIcon.setAttribute('class', 'fas fa-play');
        break;
    }

    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }

  container.appendChild(controlsContainer);
}

const createStyle = function() {
  styleContainer = document.createElement('style');

  let styleCode = `
  .controls,
  .slides {
    position: relative;
  }
  .indicators { 
    display: flex; 
  }`;

  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}

const idicatorHandler = function(event) {
  let target = event.target;

  if(target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if(prevIndicator !== null) prevIndicator.removeAttribute('style');

    prevIndicator = target;
  }
}

const setListener = function() {
  let indicatorsContainer = document.querySelector('.indicators');

  indicatorsContainer.addEventListener('click', idicatorHandler);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel();