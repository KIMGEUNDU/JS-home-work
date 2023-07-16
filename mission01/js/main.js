const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const btn = document.querySelector(".btn-login");

//이메일 에러메세지
email.addEventListener("input", function () {
  if (emailReg(email.value)) {
    email.classList.remove("is--invalid");
  } else if (email.value.length === 0) {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
});

//패스워드 에러메세지
pw.addEventListener("input", function () {
  if (pwReg(pw.value)) {
    pw.classList.remove("is--invalid");
  } else if (pw.value.length === 0) {
    pw.classList.remove("is--invalid");
  } else {
    pw.classList.add("is--invalid");
  }
});

//로그인 버튼 설정
function loginClick(e) {
  if (email.value === user.id && pw.value === user.pw) {
    e.preventDefault();
    window.location.href = "welcome.html";
  } else if (email.value !== user.id && pw.value !== user.pw) {
    alert("아이디와 비밀번호를 확인해주세요");
    window.location.href = "index.html";
  }
}

btn.addEventListener("click", loginClick);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,25}$/;
  return re.test(String(text).toLowerCase());
}
