
const navBar = document.querySelectorAll('.navbar button');
const slide = document.querySelector('.swiper-wrapper');


const timeBar = document.querySelector('.time-bar');
const timeLine = document.querySelector('.time-line');
const time = document.querySelector('.time');

const audio = new Audio();

const [loop, prev, play, next, shuffle] = navBar;
const END_POINT = './data/data.json';
const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

let loopFlag = false;
let shuffleFlag = false;
let isPlay = false;

// 플레이리스트
let playList;

// swiper 선언
let swiper;

const getData = async options => {
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url, restOptions);

  if(response.ok) {
    response.data = await response.json();
  }

  return response;
}

function renderSlide(target, data) {
  const template = createSlide(data);

  target.insertAdjacentHTML('beforeend', template);
}

function createSlide(data) {
  const {thumbnail, artist, musicName:name, lyrics, fileName} = data;

  return /* html */ `
    <div class="swiper-slide" data-music-name="${fileName}">
      <div class="music-info">
        <img src="./assets/thumbnails/${thumbnail}" alt="${thumbnail} - ${artist}" />
        <p class="music-title"><strong>${name}</strong><br />${artist}</p>
        <div class="lyrics">
          ${lyrics}
        </div>
      </div>               
    </div>
  `
}

async function renderPlaylist() {

  try {
    const response = await getData({url: END_POINT});
    const responseData = response.data;
    const musicData = responseData.data;

    musicData.forEach(data => renderSlide(slide, data));

    swiper = new Swiper('.swiper', {
      loop: true,
      touchRatio: 0,
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

    playList = document.querySelectorAll('.swiper-slide');
    audio.src = `./assets/playLists/${playList[0].dataset.musicName}`;

  } catch(err) {
    console.error(err);
  }
}

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


function handlePlay(e) {
  if(!isPlay) { 
    play.classList.add('pause');
    isPlay = !isPlay;
    audio.play();
    // musicPlay();
  } else {
    play.classList.remove('pause');
    isPlay = !isPlay;
    audio.pause();

  }
}

function getRandom(currentNum, num) {
  
  let number = num + 1;
  do {
    number = Math.floor(Math.random() * num);
  } while(currentNum == number);

  return number;

}

function musicPlay(index) {
  if(!index) index = swiper.realIndex;
  if(index < 0) index = playList.length - 1;
  // audio.
  audio.src = `./assets/playLists/${playList[index].dataset.musicName}`;
  audio.play();

  isPlay = true;
  play.classList.add('pause');
}

function handlePrev(e) {
  const currentIndex = swiper.realIndex;

  swiper.slidePrev();
  musicPlay((currentIndex-1) % playList.length);
}


function handleNext() {
  const currentIndex = swiper.realIndex;
  const randomNum = getRandom(currentIndex, playList.length);

  
  if(shuffleFlag) {
    swiper.slideTo(randomNum, 2000, false);
    musicPlay((randomNum) % playList.length);
  } else {
    swiper.slideNext();
    musicPlay((currentIndex+1) % playList.length);
  }

}

function handleShuffle(e) {
  const template = createTemplate('span', 'shuffleOn', 'ON');

  toggleTemplate(shuffleFlag, this, 'beforeend', template);
  shuffleFlag = !shuffleFlag;

}

function handleTimer(e) {
  let currentTime = audio.currentTime;
  let duration = audio.duration;
  if(isNaN(duration)) duration = 0;

  let progress = ((currentTime / duration) * 100).toFixed(2);
  if(isNaN(progress)) progress = 0;

  let ctMinute = Math.floor(currentTime / 60)
  let ctSecond = Math.floor(currentTime % 60).toString().padStart(2, '0');
  let duMinute = Math.floor(duration / 60)
  let duSecond = Math.floor(duration % 60).toString().padStart(2, '0');

  const timeStamp = `${ctMinute}:${ctSecond} / ${duMinute}:${duSecond}`;

  timeLine.style.width = `${progress}%`;
  time.textContent = timeStamp;

}


renderPlaylist();

loop.addEventListener('click', handleLoop);
prev.addEventListener('click', handlePrev);
play.addEventListener('click', handlePlay);
next.addEventListener('click', handleNext);
shuffle.addEventListener('click', handleShuffle);

audio.addEventListener('timeupdate', handleTimer);
audio.addEventListener('ended', () => {
  if(!loopFlag) handleNext();
  else {
    audio.currentTime = 0;
    audio.play();
  }
});