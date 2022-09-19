//부족한것 배열생성해서 룰렛칸에 숫자 인덱스 박아서 점수 배수연결하기.
// drawio는 무시해주세요 시간없어서 최대한 구현부터했습니다.
let powerisCheck = "false";
let count = 0;
// 파워버튼 눌러서 껐다켜기.
document.getElementById("powerButton").onclick = () => {
  powerisCheck = "true";
  if (count % 2 == 0) {
    expressionCalc(); // 코인전광판
    // startChange(1000); //가위바위보변화 시작
    setTimeout(() => {
      gameOver();
    }, 500);

    // startRoulette();
  } else {
    resetChange();
    expressionReset();
  }
  count++;
};
// const speedPlus = document.getElementById("speedbutton");
// speedPlus.onclick = () => {
//   startChange(0);

//   if(amount)
// };

function gameOver() {
  if (coinAmount < 0) {
    alert("gameOver");
  } else if (coinAmount == 0) {
    alert("돈을 넣어라");
    startChange(1000);
  } else {
    startChange(100);
  }
}

// document.getElementById("powerButton").onclick = () => {
//   let coinAmount1 = 0; //초기자금
//   let imgSpeed1; // 가위바위보 변화 속도

//   if (coinAmount1 == 0) {
//     imgSpeed1 = 1000;
//     alert("돈을 넣어주세요");
//   } else if (coinAmount1 < 0) {
//     alert("게임 오버");
//     return;
//   } else {
//     if (count % 2 == 0) {
//       expressionCalc(); // 코인전광판
//       basicChange(); //가위바위보변화 시작
//       // startRoulette();
//     } else {
//       resetChange();
//       expressionReset();
//     }
//     count++;
//   }
// };

let coinAmount = 0;

// 코인전광판띄우기
let expressionCalc = function calc() {
  document.getElementById("coinAmount").innerText = coinAmount;
};

let coinCount = 0;
//동전넣기함수
let expressionInsert = function insert() {
  coinAmount += 100;
  if (coinCount == 0) gameOver();
  coinCount++;
};

// 클릭 돈 넣기
document.getElementById("insert").onclick = () => {
  expressionInsert();
  expressionCalc();
  // 코인어마운트값 받아서 스피드 조정하기.(미구현 질문)
};

let changeIndex = -1;

// 기존 디스플레이 가위바위보 변환 함수.
let expressionImgChange = function ichange() {
  changeIndex++;
  if (changeIndex == 3) {
    changeIndex = 0;
  }

  if (changeIndex < 3) {
    document.getElementById("change").innerHTML = `<img src="${
      changeIndex % 3
    }.PNG" alt="" id = "changeImg1"/>`;
  }
};

let changeControll = null;
let imgSpeed; //이미지 변화 속도 컨트롤
// 가위바위보 디스플레이 변화 켜기

let startChange = (speed) => {
  clearInterval(startChange);
  expressionImgChange();
  changeControll = setInterval(expressionImgChange, speed);
};
let basicChange = () => {
  expressionImgChange();
  changeControll = setInterval(expressionImgChange, 1000);
};

//가위바위보 디스플레이 리셋
let resetChange = () => {
  if (changeControll != null) {
    changeIndex = -1;
    clearInterval(changeControll);
  }
};

//가위바위보 디스플레이 정지
let stopChange = () => {
  if (changeControll != null) {
    clearInterval(changeControll);
  }
};

// 코인전광판,가위바위보디스플레이 리셋
let expressionReset = function reset() {
  // count = 0;
  // isReset = true;
  console.log(coinAmount);
  coinAmount = 0;
  document.getElementById("coinAmount").innerText = "";
  document.getElementById("change").innerHTML = "";
};

// 유저가 가위눌렀을때
document.getElementById("userScissor").onclick = () => {
  stopChange();
  document.getElementById("userRock").classList.add("displayoff");
  document.getElementById("userPaper").classList.add("displayoff");
  document.getElementById("insert").classList.add("displayoff");
  if (changeIndex == 0) {
    document.getElementById("draw").classList.add("displayOpacity");
    setTimeout(function () {
      console.log("비겼습니다.");

      document.getElementById("draw").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      expressionCalc();
      // startChange();
      gameOver();
    }, 2000);
  } else if (changeIndex == 1) {
    document.getElementById("lose").classList.add("displayOpacity");
    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount -= 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      gameOver();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      rotateReset();
      // startChange();
    }, 7000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");

    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount += 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      // 5초 돌리고 정지함수
      rotateReset();
      // startChange();
      gameOver();
    }, 7000);
  }
};

document.getElementById("userRock").onclick = () => {
  stopChange();
  document.getElementById("userScissor").classList.add("displayoff");
  document.getElementById("userPaper").classList.add("displayoff");
  document.getElementById("insert").classList.add("displayoff");
  if (changeIndex == 1) {
    console.log("draw");
    document.getElementById("draw").classList.add("displayOpacity");
    setTimeout(function () {
      console.log("비겼습니다.");
      expressionCalc();
      document.getElementById("draw").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      startChange();
    }, 2000);
  } else if (changeIndex == 2) {
    document.getElementById("lose").classList.add("displayOpacity");
    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount -= 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      rotateReset();
      startChange();
    }, 7000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");

    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount += 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      startChange();
      rotateReset();
    }, 7000);
  }
};

document.getElementById("userPaper").onclick = () => {
  stopChange();
  document.getElementById("userScissor").classList.add("displayoff");
  document.getElementById("userRock").classList.add("displayoff");
  document.getElementById("insert").classList.add("displayoff");

  if (changeIndex == 2) {
    console.log("draw");
    document.getElementById("draw").classList.add("displayOpacity");
    setTimeout(function () {
      console.log("비겼습니다.");
      expressionCalc();
      document.getElementById("draw").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      startChange();
    }, 2000);
  } else if (changeIndex == 0) {
    document.getElementById("lose").classList.add("displayOpacity");
    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount -= 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      rotateReset();
      stopChange();
    }, 7000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");

    setTimeout(function () {
      startRoulette();
    }, 1000);

    setTimeout(function () {
      stopRoulette();
      console.log(rotateIndex);
      coinAmount += 100 * rotateIndex;
    }, 5000);
    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      asd("win", "displayOpacity");
      startChange();
      rotateReset();
    }, 7000);
  }
};
// yg
let count123 = 0;
function asd(asd, asdf) {
  const temp = getElementById(asd);
  if (count123 == 0) {
    temp.classList.add(asdf);
    count123++;
  } else {
    temp.classList.remove(asdf);
    count123 = 0;
  }
}

let rotateIndex = parseInt(Math.random() * 10); // 랜덤배수 돌리기위해
let rotateControll = null;

// 룰렛돌리기함수
let expressionRotate = function rotate() {
  rotateIndex++;

  if (rotateIndex == 16) {
    rotateIndex = 0;
  }
  if (rotateIndex < 16) {
    let circle = document.getElementById("circle");
    circle.style.transform = `rotate(${23 * rotateIndex}deg)`;
  }
};

let rotateReset = () => {
  circle.style.transform = `rotate(${0 * rotateIndex}deg)`;
};

let startRoulette = () => {
  rotateControll = setInterval(expressionRotate, 100);
};

let stopRoulette = () => {
  if (rotateControll != null) clearInterval(rotateControll);
};

let rouletteCount = 15; //룰렛칸 개수

let rouletteNum = (rouletteCount) => {
  let rouletteValue = [];
  for (let i = 0; i < rouletteCount; i++) {
    rouletteValue.push(i);
    console.log(rouletteValue);
  }
  console.log(rouletteValue);
};

const btnProtect = document.getElementsByClassName("playerSelect");

console.log(btnProtect);

let array = [];
let btnProtect1 = [...btnProtect];
array.push(btnProtect1[0]);
console.log(array);
console.log(btnProtect1);

// function protect(powerisCheck) {
//   if (powerisCheck === "false") {
//     btnProtect.style.pointerEvents = "none";
//   } else if (powerisCheck === "true") {
//     btnProtect[0].style.pointerEvents = "auto";
//   }
// }

// protect(powerisCheck);
