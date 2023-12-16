/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector("nav");
const visualImage = document.querySelector('.visual img');

// 1-1. 클릭 이벤트 활성화 - 이벤트 지정
navigation.addEventListener("click", function (e) {
  e.preventDefault();
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
  visualImage.alt = `${data[index - 1].alt}`;
});

