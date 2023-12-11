
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* -------------------------------------------------------------------------- */

// 1. 입력 폼 데이터 받아오기
const userEmail = document.querySelector('.user-email-input');
const userPassword = document.querySelector('.user-password-input');

// 2. 각 input 태그에 key 이벤트 붙이기 : 상태 변수 관리
userEmail.addEventListener('keyup', () => {
  // 3. 입력 폼 데이터 validation
  if(!emailReg(userEmail.value) && userEmail.value.length > 0) {
    userEmail.classList.add('is--invalid');
  } else {
    userEmail.classList.remove('is--invalid');
  }
});
userPassword.addEventListener('keyup', () => {
  // 3. 입력 폼 데이터 validation
  if(!pwReg(userPassword.value) && userPassword.value.length > 0) {
    userPassword.classList.add('is--invalid');
  } else {
    userPassword.classList.remove('is--invalid');
  }
});

// 4. 입력 데이터 validation : 로그인 버튼 클릭 시 조건 처리
// 4-1. 로그인 버튼 클릭 시 이벤트 붙이기
const loginButton = document.querySelector('.btn-login');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  // 4-2. 입력 데이터 비교
  if(user.id === userEmail.value && user.pw === userPassword.value) {
    window.location.href = 'welcome.html';
  //5. 이메일 및 비밀번호 입력 요청 문구 출력
  } else if(userEmail.value.length === 0) {
    alert('이메일을 입력해 주세요.');
  } else if(userPassword.value.length === 0) {
    alert('비밀번호를 입력해 주세요.')
  // 6. 입력 데이터 형식 안내 문구 출력
  } else if(userEmail.classList.contains('is--invalid')) {
    alert('이메일 형식을 확인해 주세요.');
  } else if(userPassword.classList.contains('is--invalid')) {
    alert('비밀번호는 특수문자 포함 6자리 이상 입력해 주세요.');
  } else  {
    alert('아이디나 비밀번호가 틀렸습니다.');
  }
});









