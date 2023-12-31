# Swiper 가지고 놀기

> ## 목표: swiper.js를 사용하여 무엇이든 만들어 보기
> ### 링크: https://swlee2973.github.io/js-homework/mission03/

---

## 과제 내용 정리
## 1. 구상
### 1) swiper를 이용한 결과물 주제 구상
* 음악 플레이리스트를 만들어 swiper.js를 통해 곡 넘김 애니메이션을 구현
* 초기 구상도
> ![초기 구상도](./screenshots/초기%20구상.png)
> 1. 썸네일과 음악 제목 및 가사, 동작 버튼을 구성 <br />
> 2. 슬라이드 하나를 이와 같은 화면으로 렌더링해 동작 버튼 혹은 곡이 끝날 시 슬라이드를 넘김

---
### 2) 음악 플레이 화면 스타일링
* 구상 이미지를 토대로 마크업 및 CSS 스타일링
> ![화면 스타일링](./screenshots/음악정보%20스타일링.png)
> 1. slide가 화면 단위로 넘어가는지 동작 확인 후 slide 영역에 마크업 <br />

---
### 3) 동작 버튼 스타일링
* 동작 버튼 마크업, 토글 기능 구성, CSS 스타일링
> ![동작버튼 add](./screenshots/동작버튼%20add.png)
> ![셔플버튼 토글](./screenshots/셔플버튼%20토글.gif) ![반복버튼 토글](./screenshots/반복재생%20버튼%20토글.gif)
> 1. 동작 버튼의 배경은 sprite 이미지로 구성 <br />
> 2. 버튼 클릭 시의 토글 기능 및 이미지 구성 <br />

---
### 4) 음악 재생 버튼 및 다음/이전 버튼 기능 활성화
* swiper 객체의 내장 함수를 통해 다음/이전 기능 구성
* 재생 버튼의 이미지 토글(기능 구현 고민..)
> ![데이터 받기 전 중간점검](./screenshots/데이터%20받기%20전%20중간점검.gif)
> 1. `swiper.slidePrev()`, `swiper.slideNext()`를 사용, 이는 추후 셔플 기능 연동을 위함이다. <br />
> 2. 버튼 클릭 시 음악 재생 기능의 자연스러움을 위해 쓰로틀링 고민중.. <br />
> 3. 셔플 버튼이 활성화 되었을 경우 다음 버튼 클릭 시 `swiper.slideTo(realIndex)`    를 `Math.random()`을 통해 사용 예정 <br />
> 4. 1곡 반복 재생 버튼이 활성화 되었을 경우 음악 종료 시 동일 슬라이드 reload 방법 고민이 필요

---
### 5) `data.json` 을 생성하여 GET 방식으로 데이터 구성 및 함수 분리
* 배운 것은 활용하자는 마인드로 굳이굳이 넣어본 기능.. 어렵다.. 기억안난다..
* 수업시간에 짜여진 코드를 활용해 함수 생성, 이후에 분리 후 커밋했다.
> ![data.json을 통한 화면 렌더링](./screenshots/json을%20통한%20화면%20렌더링.gif)
> 1. 23일 밤~24일 작업은 여기서 끝!

### 6) `swiperjs` 내장 함수를 통한 셔플 기능 및 음악 재생
* 플레이리스트 길이 내에서 중복 없이 랜덤 값 생성
* 랜덤 값을 `swiper.slideTo()`에 전달
* 멜X에서도 셔플일때 이전 음악은 셔플하지 않아서 다음 음악 재생시만..
> ![셔플재생](./screenshots/셔플%20재생.gif)

### 7) 1곡 반복 재생 
* `audio` 객체에 `'ended'` 이벤트 추가
* `loopFlag = true` 일 경우 `audio.currentTime` 값을 0으로 조정 후 재생

### 8) 재생 타임라인(프로그레스 바)
* `audio` 객체에 `'timeupdate'` 이벤트 추가
* `audio.currentTime`, `audio.duration`을 활용해 진행시간 및 진행도 계산
> ![재생 타임라인](./screenshots/재생%20타임라인.gif)
> 1. 시작은 swiper 갖고 놀기였으나.. web api에 대해서 알아가는 시간이 되어버림
> 2. 여기까지 사용한 swiper 옵션을 정리하면..
  >> * `swiper.touchRatio` : 마우스 드래그 금지
  >> * `swiper.realIndex` : 현재 슬라이드의 index
  >> * `swiper.slidePrev()` / `swiper.slideNext()` : 이전/다음 슬라이드 이동
  >> * `swiper.slideTo()` : 지정한 슬라이드 인덱스로 이동

### 9) 타임라인 핸들링
* 타임라인 위치 클릭 시 클릭 지점에서 노래재생
> ![타임라인 핸들링](./screenshots/타임라인%20핸들링.gif)


### 10) 스타일 변경
* 어떤 최강 디자이너님의 조언을 받아 스타일 변경
> ![스타일 변경](./screenshots/스타일%20변경.png)