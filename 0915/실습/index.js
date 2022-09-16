let coinAmount = 0;
let count = 0;

let isReset = false;

let div = document.createElement(`div`);

if (coinAmount < 0) {
  reset();
  expressionGameover();
}

let expressionInsert = function insert() {
  coinAmount += 1000;
};

let expressionCalc = function calc() {
  document.getElementById("coinAmount").innerText = coinAmount;
};

document.getElementById("powerButton").onclick = () => {
  if (count % 2 == 0) {
    expressionCalc();
    expressionChange();
    // expressionRotate();
  } else {
    reset();
  }
  count++;
};

let isStop = false;
function imgStop() {
  console.log("stop");
  isStop = true;
}

function reset() {
  //   count = 0;
  isReset = true;
  document.getElementById("coinAmount").innerText = "";
  //   coinAmount = 1000;
  document.getElementById("change").innerHTML = "";
}

let changeIndex = -1;
let obTimeout;
let RotateIndex = 0;
const expressionRotate = function rotate() {
  console.log(document.getElementById("circle"));
  RotateIndex++;
  if (RotateIndex == 16) {
    RotateIndex = 0;
  }
  if (RotateIndex < 16) {
    let circle = document.getElementById("circle");
    circle.style.transform = `rotate(${24 * RotateIndex}deg)`;
  }
};
// 돌리는 함수
// let interval = 100;
// setInterval(() => {
//   setTimeout(() => {
//     expressionRotate();
//   }, 0);
// }, interval);

let expressionChange = function change() {
  {
    if (coinAmount < 0) {
      console.log("gameover");
      setTimeout(function () {
        reset();
      }, 2000);
      isReset = false;
      coinAmount = 0;
      return;
    }
    if (isReset) {
      isReset = false;
      console.log(isReset);
      return;
    }
    if (isStop) {
      if (document.getElementById) isStop = false;
      return;
    }
    changeIndex++;
    if (changeIndex == 3) {
      changeIndex = 0;
    }
    if (changeIndex < 3) {
      document.getElementById("change").innerHTML = `<img src="${
        changeIndex % 3
      }.PNG" alt="" id = "changeImg1"/>`;
      obTimeout = setTimeout("expressionChange()", 1000);
    }
  }
  console.log(changeIndex);
};

document.getElementById("insert").onclick = () => {
  expressionInsert();

  expressionCalc();
};

document.getElementById("userScissor").onclick = () => {
  imgStop();
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
      expressionChange();
    }, 2000);
  } else if (changeIndex == 1) {
    document.getElementById("lose").classList.add("displayOpacity");
    coinAmount -= 1000;

    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      expressionChange();
    }, 2000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");
    coinAmount += 1000;

    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      expressionChange();
    }, 2000);
  }
};

document.getElementById("userRock").onclick = () => {
  imgStop();
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

      expressionChange();
    }, 2000);
  } else if (changeIndex == 2) {
    document.getElementById("lose").classList.add("displayOpacity");
    coinAmount -= 1000;

    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      expressionChange();
    }, 2000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");
    coinAmount += 1000;

    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userPaper").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      expressionChange();
    }, 2000);
  }
};

document.getElementById("userPaper").onclick = () => {
  imgStop();
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

      expressionChange();
    }, 2000);
  } else if (changeIndex == 0) {
    document.getElementById("lose").classList.add("displayOpacity");
    coinAmount -= 1000;

    setTimeout(function () {
      console.log("졌다");
      expressionCalc();
      document.getElementById("lose").classList.remove("displayOpacity");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      expressionChange();
    }, 2000);
  } else {
    document.getElementById("win").classList.add("displayOpacity");
    document.getElementById("win1").classList.add("displayOpacity");
    coinAmount += 1000;

    setTimeout(function () {
      console.log("이겼다");
      expressionCalc();
      document.getElementById("win").classList.remove("displayOpacity");
      document.getElementById("win1").classList.remove("displayOpacity");
      document.getElementById("userRock").classList.remove("displayoff");
      document.getElementById("userScissor").classList.remove("displayoff");
      document.getElementById("insert").classList.remove("displayoff");

      expressionChange();
    }, 2000);
  }
};
