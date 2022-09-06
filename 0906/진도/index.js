const comSel = [];

function comSelect() {
  for (
    let tempNum = parseInt(Math.random() * 10);
    comSel.length < 3;
    tempNum = parseInt(Math.random() * 10)
  ) {
    if (!comSel.includes(tempNum)) {
      comSel.push(tempNum);
    }
  }
}

function comSelect1() {
  for (; comSel.length < 3; ) {
    const tempNum = parseInt(Math.random() * 10);
    // 반복 내용에서 변수를 초기화 하기떄문에 재정의가 필요치 않아 const가 가능하다.
    console.log(tempNum);
    if (!comSel.includes(tempNum)) {
      comSel.push(tempNum);
    }
  }
}

function comSelect2() {
  while (comSel.length < 3) {
    const tempNum = parseInt(Math.random() * 10);
    // for문 조건 while로 대체 가능하다.
    console.log(tempNum);
    if (!comSel.includes(tempNum)) {
      comSel.push(tempNum);
    }
  }
}
// comSelect1();
// comSelect();
comSelect2();
// 함수를 다 호출하면 동일 조건이기 때문에 처음 함수가 조건이 충족되기때문에 아래함수들이 호출되지않는다.
console.log(comSel);

// for(변수초기화;조건;반복후변경점)
// 1.for는 "변수 초기화"를 싱행하고, 조건을 확인 후 내용을 실행한다.
// 2.내용 실행이 끝나면 "반복 후 변경점" 코드를 실행한다.
// 3."반복 후 변경점" 코드 실행 후 조건을 확인하여 true면 내용을 실행한다.
// 이후 2로돌아가서 다시 진행한다.

let count = 0;
while (true) {
  let playerSel = [];
  while (playerSel.length < 3) {
    const tempInput = prompt(
      `3자리 숫자 입력해라\n 0으로 시작 가능 중복 숫자 불가`
    );
    if (!tempInput) {
      alert("게임을 종료한다.");
      break;
    }
    //   입력창에대해서 취소를 누르면 tempInput은 정의되지 않아 undefined를 갖게됨.
    // 그래서 length를 갖지 못해 if에 문제가생긴다.
    if (tempInput.length != 3 || isNaN(parseInt(tempInput))) {
      // isNaN 함수는 매개변수가 NaN, 즉 숫자가 아닌 문자를 강제로 숫자로 바꿨는지 확인해준다.
      continue;
      // 아래의 코드를 실행하지 않고 반복을 시작한다.
    }
    tempInput.split("").forEach((item) => {
      //foreach는 배열의 아이템을 하나하나가져와서 매개변수함수에 전달하여 함수를 실행한다.
      //(item) => {내용}<<화살표 함수이다.
      // item은 tempInput.split('')배열의 하나하나의 아이템이다.
      // forEachfunction(item){}으로 대체가능.
      if (!playerSel.includes(parseInt(item))) playerSel.push(parseInt(item));
      // 컴퓨터가 선택한 랜덤 수는 정수이기때문에 플레이어가 입력한 숫자 또한 정수로 정의한다.
      // 컴퓨터가 선택한 랜덤 수와 마찬가지로 중복되면 안되기 때문에 playerSel 배열에
      // 숫자가 없는지 확인 후 추가 한다.
    });
    console.log(playerSel);

    //   //위의 forEach는 아래의 코드로 대체할 수 있다.
    //   const tempArr = tempInput.split("");
    //   //tempArr이라는 변수로 배열을 정의한다.
    // //   그떄그떄마다 문자열(tempInput)을 spilt 메서드를 사용하여 짜르면 시간이 그만큼 늘어난다.
    //   for (let i = 0; i < tempArr.length; i++) {
    //     // 컴퓨터는 숫자를 0부터 세기 때문에 i(index)를 0부터 시작하여 tempArr 배열의 끝(길이-1)까지 코드를 실행한다.
    //     if (!playerSel.includes(parseInt(tempArr[i])))
    //       playerSel.push(parseInt(tempArr[i]));
    //   }
    //   console.log(playerSel);

    //   //   Player = tempInput.split("");
    if (playerSel.length != 3) playerSel = [];
  }
  //입력값이 없을 경우 playerSel은 빈 배열([])이 되므로 배열의 길이를 확인하여 break로 while을
  // 종료해준다.
  if (!playerSel.length) break;
  console.log("입력된 정상적인 플레이어의 선택 : " + playerSel);

  let strike = 0;
  let ball = 0;
  let out = 0;
  //첫번째 자리
  let tempNumber = comSel[0];
  if (playerSel[0] == tempNumber) {
    strike++;
  } else if (playerSel[1] || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  //두번째 자리

  tempNumber = comSel[1];
  if (playerSel[1] == tempNumber) {
    strike++;
  } else if (playerSel[1] || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  //세번째 자리

  tempNumber = comSel[2];
  if (playerSel[2] == tempNumber) {
    strike++;
  } else if (playerSel[1] || playerSel[2] == tempNumber) {
    ball++;
  } else {
    out++;
  }
  if (strike == 3) {
    alert(++count + "번 만에 성공하셨네요.");
    break;
  }
  //   strike가 3일 경우에 break로 while종료
  //아래코드는 count를 증가시키고 count,strike,ball,out을 표기해준다.
  alert(
    ++count + "번 시도함/strike:" + strike + "/ball:" + ball + "/out:" + out
  );
}
