
const navBar = document.querySelectorAll('.navbar button');
const [loop, prev, play, next, shuffle] = navBar;
const END_POINT = 'https://swlee2973.github.io/js-homework/mission03/data/data.js';

let loopFlag = false;
let shuffleFlag = false;
let isPlay = false;


const swiper = new Swiper('.swiper', {
  loop: true,
  // effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  // autoplay: true,
  parallax: true,
  speed: 2000,
  mousewheel: {
    forceToAxis: true,
  }
});

function createTemplate(tagName, className, contents) {
  const template = /* html */ `
    <${tagName} class='${className}'>
      ${contents}
    </${tagName}>
  `;
  
  return template;
}

function toggleTemplate(flag, target, position, template) {

  if(!flag) {
    target.insertAdjacentHTML(position, template);
  } else {
    target.textContent = '';
  }
}

function handleLoop(e) {
  const template = createTemplate('span', 'repeat', 1);

  toggleTemplate(loopFlag, this, 'beforeend', template);
  loopFlag = !loopFlag;

}

function handlePrev(e) {
  console.log(swiper.realIndex);
  swiper.slidePrev();

}

function handlePlay(e) {
  if(!isPlay) { 
    play.classList.add('pause');
    isPlay = !isPlay;
  } else {
    play.classList.remove('pause');
    isPlay = !isPlay;
  }
}

function handleNext(e) {
  swiper.slideNext();

}

function handleShuffle(e) {
  const template = createTemplate('span', 'shuffleOn', 'ON');

  toggleTemplate(shuffleFlag, this, 'beforeend', template);
  shuffleFlag = !shuffleFlag;

}



loop.addEventListener('click', handleLoop);
prev.addEventListener('click', handlePrev);
play.addEventListener('click', handlePlay);
next.addEventListener('click', handleNext);
shuffle.addEventListener('click', handleShuffle);