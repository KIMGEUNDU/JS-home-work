# 🦁 자바스크립트 Mission.02 Poster  
썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

## 🍿 완성본 미리보기
<iframe src="https://codesandbox.io/embed/jabaseukeuribteu-2ca-gwaje-9v7fyv?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="자바스크립트 2차 과제"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<br>
<br>

## 🔖 목차
1. 요구사항
   1. ['is-active' 클래스 추가](#-is-active-클래스-추가)
   2. [배경색 변경](#-배경색-변경)
   3. [이미지 변경](#-이미지-변경)
   4. [상단 타이틀 이름 변경](#-상단-타이틀-이름-변경)
   5. [오디오 추가](#-오디오-추가)
   6. [클릭 이벤트](#-클릭-이벤트)
2. 추가 진행
   1. [캡슐화를 위한 IIFE 활용](#-캡슐화를-위한-iife-활용)
   2. [파비콘 설정](#-파비콘-설정)
   3. [상단 타이틀 색깔 변경](#-상단-타이틀-색깔-변경)
<br>

## 🔥 요구사항  

### 🔻 'is-active' 클래스 추가
```
  function addActive(removeTarget, addTarget, className) {
    removeTarget.forEach((i) => {
      removeClass(i, className);
    });

    addClass(addTarget, className);
  }

  addActive(li, target, "is-active");
```
클릭한 대상 `e.target` 에 하얀색 테두리 효과가 나타날 수 있게 `is-active` 클래스를 추가해주는 함수입니다.
처음에는 모든 `li` 요소들을 돌며 `is-active` 클래스를 지워준 후 `e.target`에만 클래스를 추가해줍니다.


### 🔻 배경색 변경
```
  function setBgColor(color1, color2 = "#000") {
    setCss(
      body,
      "background",
      `linear-gradient(to bottom, ${color1}, ${color2})`
    );
  }

  setBgColor(dataIndex.color[0], dataIndex.color[1]);
```
클릭한 캐릭터에 맞게 `body`의 배경색을 변경해주는 함수입니다.
`data.js`에 저장되어있는 `color`를 불러주기위해 매개변수를 두개 받습니다.
`dataIndex.color`를 써서 한번에 불러 올 수 있지만 인덱스값으로 나눠 매개변수를 두개로 만들어주었습니다.
그리고 두번째 매개변수의 기본값을 `#000` 으로 지정해주었습니다.

### 🔻 이미지 변경
```
  function setImage(src, alt) {
    attr(img, "src", `./assets/${src}.jpeg`);
    attr(img, "alt", `${alt}`);
  }

  setImage(dataIndex.name, dataIndex.alt);
```
클릭한 캐릭터에 맞게 이미지를 변경해주는 함수입니다.
첫번째 매개변수로 `data.js`에 저장된 `name`값을 불러오고 두번째 매개변수로 그에 맞는 대체 텍스트를 주기 위해 `alt`값을 불러주었습니다.

### 🔻 상단 타이틀 이름 변경
```
  function setNameText(name) {
    nickName.textContent = name;
  }

  setNameText(dataIndex.name);
```
클릭한 캐릭터에 맞게 상단 타이틀의 제목을 변경해주는 함수입니다.  
매개변수로 `data.js`의 `name`값을 불러와주었습니다.

### 🔻 오디오 추가
```
  function addAudio(name) {
    const audioSrc = `/mission02/client/assets/audio/${name.toLowerCase()}.m4a`;
    const audioPlay = new AudioPlayer(audioSrc);
    audioPlay.play();
  }

  addAudio(dataIndex.name);
```
클릭한 캐릭터에 맞는 오디오를 불러와주는 함수입니다.  
`audio.js`에 저장된 `class`를 생성자함수로 불러 새로운 변수에 담아주고 실행시켜주었습니다.  
매개변수로 오디오 저장 경로를 설정해주고 캐릭터에 맞는 파일 이름을 불러주기 위해 `dataIndex.name`값을 불러주었습니다.  
하지만 `name`값은 대문자이고 파일의 이름은 소문자여서 `name`의 값을 소문자로 변환해주어 파일을 불러주었습니다.  


### 🔻 클릭 이벤트
```
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
```
캐릭터 이미지를 클릭했을 때 작동시켜주는 이벤트 함수입니다.  
이미지에 가장 가까운 `li`를 지정해준 후 가까운 `li`가 없을 시 오류가 나지 않도록 함수를 끝내주는 조건문을 추가해주었습니다.  
그리고 `li`가 가지고 있는 속성인 `data-index`를 불러주었고 `data.js`의 값을 인덱스값으로 불러주기 위한 변수를 선언했습니다.  
그 후 일어나야할 동작들을 담고 있는 함수들을 실행시켜주었습니다.  


<br>
<br>

## 💧 추가 진행
### 🔻 캡슐화를 위한 IIFE 활용
```
(function () {
  const nav = getNode(".nav");
  const li = getNodes("li");
  const nickName = getNode(".nickName");
  const img = getNode(".visual img");
  const body = getNode("body");
  const audio = document.createElement("audio");

  function addAudio(name) {}

  function setBgColor(color1, color2 = "#000") {}

  function setImage(src, alt) {}

  function setNameText(name) {}
  
  function addActive(removeTarget, addTarget, className) {};

  function handleClick(e) {}
  nav.addEventListener("click", handleClick);

  return {
    addAudio,
    setBgColor,
    setImage,
    setNameText,
    addActive,
  };
})();
```
전역객체 오염을 막기 위한 캡슐화를 진행하였고 그 방법으로 IIFE 패턴을 사용하였습니다.

### 🔻 파비콘 설정
```
<link rel="icon" type="icon" href="https://upload.wikimedia.org/wikipedia/commons/6/6b/Elemental_logo.jpg">
```
파비콘 에러가 뜨는 것을 방지하기 위해 파비콘을 설정해주었습니다.

### 🔻 상단 타이틀 색깔 변경
```
  function setNameText(name) {
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
```
클릭한 캐릭터에 맞게 상단 타이틀의 색깔을 변경해주는 조건문을 만들어주었습니다.

