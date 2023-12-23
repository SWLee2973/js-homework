
const navBar = document.querySelectorAll('.navbar button');
const [loop, prev, play, next, shuffle] = navBar;


const swiper = new Swiper('.swiper', {
  // loop: true,
  effect: "cube",
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

let loopFlag = 0;

function handleLoop(e) {

  if(loopFlag) {

  }

}

function handlePrev(e) {

}

function handlePlay(e) {
}

function handleNext(e) {
  swiper.next();

}

function handleShuffle(e) {

}

loop.addEventListener('click', handleLoop);
prev.addEventListener('click', handlePrev);
play.addEventListener('click', handlePlay);
next.addEventListener('click', handleNext);
shuffle.addEventListener('click', handleShuffle);