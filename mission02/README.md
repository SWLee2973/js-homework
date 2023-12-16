# 이미지 바꾸기

네비게이션 이미지를 클릭 시 배경 색과 이미지를 변경합니다.

---

## 과제 내용 정리
### 1. 클릭 이벤트 활성화
*  네비게이션 영역 클릭 시의 이벤트 활성화
> 1. `querySelector`를 사용해 네비게이션 영역 지정 <br />
> 2. `e.target.closest`를 사용해 이미지(li)에게 이벤트 위임 <br />
> 3. `li` 클릭 시 이미지 테두리 모두 제거 후 클릭 대상 테두리 생성 <br />

---
### 2. 네비게이션 목록 클릭 시 배경 색상 변경
* `body` 영역에 `data.js`의 각 인덱스에 따른 그라데이션 색상 지정
> 1. `document.body.style.background`에 `linear-gradient` 속성 지정 <br />

---
### 3. 클릭 시 비쥬얼 영역 대상 이미지로 교체
* 비쥬얼 영역의 이미지 및 대체 텍스트 교체
> 1. `data.js`의 각 인덱스에 따른 속성 값 지정 <br />
> 2. 비쥬얼 영역 상단 이름 교체 <br />

---
### 4. 클릭 시 오디오 재생
* 네비게이션 이미지 클릭 시 오디오 재생
> 1. `Audio` 객체를 통해 src값 지정 후 재생 <br />

---

### 작성 코드
```js
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
```





