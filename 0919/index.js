let count = 0;
let coinAmount = 0;
let isBoolen;
let imgSpeed = 1000;

let playerSelect1 = [...document.getElementsByClassName("playerSelect")];
let displayOn = () => {
  document.getElementById("coinAmount").innerText = coinAmount;
};

let displayOff = () => {
  coinAmount = 0;
  document.getElementById("coinAmount").innerHTML = "";
  stopChange();
  document.getElementById("change").innerHTML = "";
  imgIndex = -1;
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
  }.png"/>`;
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
console.log(speedImg);
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
  console.log(coinAmount);
  coinAmount += 100;
  imgSpeed = 100;
  displayOn();
  btnActive();
  stopChange();
  startChange(imgSpeed);
};
let userSel;
document.getElementById("userScissor").onclick = () => {
  userSel = document.getElementById("userScissor").onclick;

  if (userSel != null) {
    console.log("막는다");
    btnBlock();
  }
  stopChange();
  if (imgIndex == 0) {
    drawDisplay();
    console.log("비겼다");
    timeJudge(judge);
    setTimeout(gameOver, 4000);
  } else if (imgIndex == 1) {
    loseDisplay();
    coinAmount -= 100;
    console.log("졌다");
    timeJudge(judge);
    setTimeout(gameOver, 4000);
  } else {
    winDisplay();
    coinAmount += 100;
    console.log("이겼다");
    timeJudge(judge);
    setTimeout(gameOver, 4000);
  }
};

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

let judge = 3000;
let timeJudge = (judge) => {
  setTimeout(() => {
    console.log("3초후 진행");
    clearInterval(startChange);
    displayJudgeOff();
    displayOn();
  }, judge);
};

let gameOver = () => {
  btnActive();
  if (coinAmount <= 0) {
    alert("다시 시작하려면 동전을 넣어주세요");
    imgSpeed = 1000;
    btnSRPBlock();
    startChange(imgSpeed);
  } else {
    btnActive();
    alert("버튼온");
    startChange(imgSpeed);
  }
};

if ((coinAmount = 0)) {
  alert("동전을 다시 넣어주세요");
}
// let startGame = () => {
//   if (coinAmount < 0) {
//     alert("Game Over");
//   } else if (coinAmount == 0) {
//     alert("돈을 넣어주세요");
//   } else {
//     alert("빨리돌아라");
//   }
// };
