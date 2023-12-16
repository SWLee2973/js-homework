/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector("nav");
const nickName = document.querySelector('.nickName');
const visualImage = document.querySelector('.visual img');
const audio = new Audio();

// 5. 함수 분리
function handleClick(e) {
  // 1-2. 클릭 이벤트 활성화
  // console.log(e.target);
  // console.log(e.currentTarget);

  let li = e.target.closest("li");
  if (!li) return;

  // 1-3. 클릭 이미지 테두리
  Array.from(li.parentElement.children).forEach(item => item.classList.remove('is-active'));
  li.classList.add('is-active');

  let index = li.dataset.index;

  // 2. nav 클릭 시 배경 색상 변경
  document.body.style.background = `linear-gradient(to bottom, ${data[index - 1].color[0]},${data[index - 1].color[1]})`;

  // 3. 이미지 변경
  visualImage.src = `./assets/${data[index - 1].name.toLowerCase()}.jpeg`;
  // 4. 텍스트 변경
  nickName.innerHTML = `${data[index - 1]. name}`;
  visualImage.alt = `${data[index - 1].alt}`;

  // 6. 오디오 재생
  audio.src = `./assets/audio/${data[index-1].name.toLowerCase()}.m4a`;
  audio.play();
}

// 1-1. 클릭 이벤트 활성화 - 이벤트 지정
navigation.addEventListener("click", handleClick);

