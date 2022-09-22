let count = 0;
let coinAmount = 0;
let isBoolen;
let imgSpeed = 1000;

let judge = 3000;
let value;
let rouletteNum = [];
let num = 15; //룰렛칸개수
let rotateIndex = 0; //로테이트인덱스
// 룰렛만들기함수
let createRouletteNum = (num) => {
  for (let i = 0; i < num; i++) {
    let a = parseInt(Math.random() * num);
    // console.log(a);
    rouletteNum.push(a);
  }
  for (let j = 0; j < rouletteNum.length; j++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = rouletteNum[j];
    newDiv.id = "test" + [j];
    newDiv.classList.add("roulette");
    document.getElementById("displayCenter").appendChild(newDiv);
    newDiv.style.transform = `rotateZ(${24 * j}deg)`;
    newDiv.style.overflow = "hidden";
    newDiv.classList.add = "roulette";
    newDiv.style.backgroundColor = "rgb(0, 255, 255)";
    if (j % 3 == 2) newDiv.style.backgroundColor = "rgb(255, 91, 91)";
    if (j % 3 == 1) newDiv.style.backgroundColor = "rgb(255, 255, 122)";

    // newDiv.style.z-index = "10";
  }
  console.log(rouletteNum);
};
createRouletteNum(num);

// 룰렛지우기함수
// let removeRouletteNum = () => {
//   doucment.getElementById("displayCenter").removeChild(newDiv);
// };
// removeRouletteNum();

let playerSelect1 = [...document.getElementsByClassName("playerSelect")];
let displayOn = () => {
  document.getElementById("coinAmount").innerText = coinAmount;
  document.getElementById("coinAmount").style.color = "red";
};

let displayOff = () => {
  coinAmount = 0;
  document.getElementById("coinAmount").innerHTML = "";
  stopChange();
  document.getElementById("change").innerHTML = "";
  imgIndex = -1;
  imgSpeed = 1000;
};

let btnActive = () => {
  playerSelect1.forEach((item) => {
    item.removeAttribute(`disabled`);
  });
};

let btnBlock = () => {
  playerSelect1.forEach((item) => {
    item.setAttribute(`disabled`, true);
  });
};
btnBlock();

let btnSRPBlock = () => {
  for (i = 0; i < playerSelect1.length - 1; i++) {
    playerSelect1[i].setAttribute(`disabled`, true);
  }
};

// let btnToggle = (isBoolen) => {
//   if (isBoolen) {
//     btnActive();
//   } else {
//     btnBlock();
//   }
// };

// let imgIndex;
let imgIndex = -1;
let changeControll;
let changeImg = () => {
  //   imgIndex = parseInt(Math.random() * 3);
  imgIndex++;
  if (imgIndex == 3) {
    imgIndex = 0;
  }
  document.getElementById("change").innerHTML = `<img src="${
    imgIndex % 3
  }.png" id="displayImg"/>`;

  //   console.log(imgIndex);
};

let startChange = (speed) => {
  changeImg();
  changeControll = setInterval(changeImg, speed);
};

let stopChange = () => {
  clearInterval(changeControll);
};

document.getElementById("powerButton").onclick = () => {
  if (count % 2 == 0) {
    btnActive();

    if (coinAmount == 0) {
      btnSRPBlock();
      setTimeout(() => {
        alert("돈을 넣어주세요");
      }, 100);
    }
    displayOn();
    stopChange();
    startChange(imgSpeed);
  } else {
    btnBlock();
    displayOff();
  }
  count++;
};

let speedImg;

let speedControll = () => {
  console.log(coinAmount);
  if (coinAmount > 0) {
    speedImg = 100;
    console.log(speedImg);
  } else {
    speedImg = 1000;
    console.log(speedImg);
  }
};

document.getElementById("insert").onclick = () => {
  // console.log(coinAmount);
  coinAmount += 100;
  imgSpeed = 100;
  displayOn();
  btnActive();
  stopChange();
  startChange(imgSpeed);
};
let userSel;

// document.getElementById("userScissor").addEventListener("click", (e) => {
//   console.log(e.target);
// });

// 승패 판별하기

let drawDisplay = () => {
  document.getElementById("draw").classList.add("displayOpacity");
};

let winDisplay = () => {
  document.getElementById("win").classList.add("displayOpacity");
  document.getElementById("win1").classList.add("displayOpacity");
};

let loseDisplay = () => {
  document.getElementById("lose").classList.add("displayOpacity");
};

let displayJudgeOff = () => {
  document.getElementById("draw").classList.remove("displayOpacity");
  document.getElementById("win").classList.remove("displayOpacity");
  document.getElementById("win1").classList.remove("displayOpacity");
  document.getElementById("lose").classList.remove("displayOpacity");
};

// let winJudge = -1; winJudge =1 이김, winJudge 0 짐
let winJudge = -1;
// 승리판별 디스플레이 끄기, 가위바위보 디스플레이 켜기, 원래로 돌리기
let timeJudge = (judge) => {
  setTimeout(() => {
    console.log("3초후 진행");
    displayJudgeOff();

    if (winJudge == 0) coinAmount -= value;
    else if (winJudge == 1) coinAmount += value;
    // rotateReset();
    console.log(value);
    displayOn();
  }, judge);
};

let rotateNum; //룰렛타임 룰렛돌아가는 타임 변수
console.log(rotateNum);
let rouletteTime = () => {
  rotateNum = parseInt(Math.random() * (1000 - 1) + 1 + 2000); //2~3초중 랜덤으로 돌림
  setTimeout(() => {
    stopRotate();
    value = parseInt(
      document.getElementById(`test${15 - rotateIndex}`).innerText
    );
    value = value * 100;
  }, rotateNum);
};

let gameOver = () => {
  btnActive();
  if (coinAmount <= 0) {
    alert("다시 시작하려면 동전을 넣어주세요");
    console.log("돈을 넣어주세요");
    coinAmount = 0;
    imgSpeed = 1000;
    displayOn();
    btnSRPBlock();
    rotateReset();
    startChange(imgSpeed);
  } else {
    btnActive();
    alert("버튼온");
    stopChange();
    imgSpeed = 100;
    startChange(imgSpeed);
    rotateReset();
  }
};

let rotateRoulette = () => {
  rotateIndex++;
  if (rotateIndex == 16) {
    rotateIndex = 0;
  }
  if (rotateIndex < 16) {
    let roulette = document.getElementById("displayCenter");
    roulette.style.transform = `rotate(${24 * rotateIndex}deg)`;
    let roulette1 = document.getElementById("displayImg");
    roulette1.style.transform = `rotate(${-24 * rotateIndex}deg)`;
    // console.log(rotateIndex);
  }
};
// rotateRoulette();
// rotateRoulette();
//
// rotateRoulette(); = 2
// rotateRoulette(); = 3
let rotateControll;
let startRotate = () => {
  rotateControll = setInterval(rotateRoulette, 100);
};
// startRotate();
let stopRotate = () => {
  clearInterval(rotateControll);
};
// rotateRoulette();

let rotateReset = () => {
  rotateIndex = 0;
  document.getElementById(
    "displayCenter"
  ).style.transform = `rotate(${rotateIndex}deg)`;
};

// rotateReset();
// let startGame = () => {
//   if (coinAmount < 0) {
//     alert("Game Over");
//   } else if (coinAmount == 0) {
//     alert("돈을 넣어주세요");
//   } else {
//     alert("빨리돌아라");
//   }
// };

let userSelect = -1;

document.getElementById("userScissor").onclick = () => {
  userSelect = 0;
  userSel = document.getElementById("userScissor").onclick;
  // if (userSel != null) {
  //   console.log("막는다");
  btnBlock();
  // }
  coinAmount -= 100;
  displayOn();
  imgSpeed = 600;
  stopChange();
  startChange(imgSpeed);
  setTimeout(() => {
    stopChange();
    console.log(imgIndex);
    if (imgIndex == userSelect) {
      drawDisplay();
      console.log("비겼다");
      winJudge = -1;
      console.log(winJudge);
    } else if (imgIndex > userSel) {
      loseDisplay();
      startRotate();
      rouletteTime();
      // coinAmount -= 100;
      console.log("졌다");
      winJudge = 0;
      console.log(winJudge);
    } else {
      winDisplay();
      startRotate();
      rouletteTime();
      // coinAmount += 100;
      console.log("이겼다");
      winJudge = 1;
      console.log(winJudge);
    }

    timeJudge(judge);
    setTimeout(gameOver, judge + 1000);
  }, judge + 2000);
};

document.getElementById("userRock").onclick = () => {
  userSelect = 1;
  userSel = document.getElementById("userRock").onclick;
  // if (userSel != null) {
  //   console.log("막는다");
  btnBlock();
  // }
  coinAmount -= 100;
  displayOn();
  imgSpeed = 600;
  stopChange();
  startChange(imgSpeed);
  setTimeout(() => {
    stopChange();
    console.log(imgIndex);
    if (imgIndex == userSelect) {
      drawDisplay();
      console.log("비겼다");
      winJudge = -1;
    } else if (imgIndex > userSel) {
      loseDisplay();
      startRotate();
      rouletteTime();
      // coinAmount -= 100;
      console.log("졌다");
      winJudge = 0;
    } else {
      winDisplay();
      startRotate();
      rouletteTime();
      // coinAmount += 100;
      console.log("이겼다");
      winJudge = 1;
    }

    timeJudge(judge);
    setTimeout(gameOver, judge + 1000);
  }, judge + 2000);
};

document.getElementById("userPaper").onclick = () => {
  userSelect = 2;
  userSel = document.getElementById("userRock").onclick;
  // if (userSel != null) {
  //   console.log("막는다");
  btnBlock();
  // }
  coinAmount -= 100;
  displayOn();
  imgSpeed = 600;
  stopChange();
  startChange(imgSpeed);
  setTimeout(() => {
    stopChange();
    console.log(imgIndex);
    if (imgIndex == userSelect) {
      drawDisplay();
      console.log("비겼다");
      winJudge = -1;
    } else if (imgIndex == 0) {
      loseDisplay();
      startRotate();
      rouletteTime();
      // coinAmount -= 100;
      console.log("졌다");
      winJudge = 0;
    } else {
      winDisplay();
      startRotate();
      rouletteTime();
      // coinAmount += 100;
      console.log("이겼다");
      winJudge = 1;
    }

    timeJudge(judge);
    setTimeout(gameOver, judge + 1000);
  }, judge + 2000);
};
