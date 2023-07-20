/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const li = getNodes("li");
const nickName = getNode(".nickName");
const img = getNode(".visual img");
const body = getNode("body");
const audio = document.createElement("audio");

//오디오 추가 함수
function addAudio(name) {
  const audioSrc = `/mission02/client/assets/audio/${name.toLowerCase()}.m4a`;
  const audioPlay = new AudioPlayer(audioSrc);
  audioPlay.play();
}

//배경화면 변경 함수
function setBgColor(color1, color2 = "#000") {
  setCss(
    body,
    "background",
    `linear-gradient(to bottom, ${color1}, ${color2})`
  );
}

//이미지 변경 함수
function setImage(src, alt) {
  attr(img, "src", `./assets/${src}.jpeg`);
  attr(img, "alt", `${alt}`);
}

// 이름 변경 함수
function setNameText(name) {
  nickName.textContent = name;
  if (nickName.textContent === "EMBER") {
    setCss(nickName, "color", "yellow");
  } else if (nickName.textContent === "WADE") {
    setCss(nickName, "color", "blue");
  } else if (nickName.textContent === "CLOD") {
    setCss(nickName, "color", "green");
  } else if (nickName.textContent === "GALE") {
    setCss(nickName, "color", "rgb(101, 15, 105)");
  }
}
// 클래스 추가 함수
function addActive(removeTarget, addTarget, className) {
  removeTarget.forEach((i) => {
    removeClass(i, className);
  });

  addClass(addTarget, className);
}

//클릭이벤트
function handleClick(e) {
  const target = e.target.closest("li");
  if (!target) {
    return;
  }
  const index = target.dataset.index;
  const dataIndex = data[index - 1];

  addActive(li, target, "is-active");
  setNameText(dataIndex.name);
  setImage(dataIndex.name, dataIndex.alt);
  setBgColor(dataIndex.color[0], dataIndex.color[1]);
  addAudio(dataIndex.name);
}

nav.addEventListener("click", handleClick);
