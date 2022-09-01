let NumText = "";
let array = [];
let num1 = 0;
let string1 = 1;
let num2 = 0;
let firstNum = "";
let secondNum = "";
let count1 = 0;
let count = 0;
let operator = "";

function Num1(num1) {
  if (count === 0) {
    firstNum = num1;
  } else if (count === 1) {
    secondNum = num1;
  } else {
    alert("이미 숫자를 모두 선택했습니다");
  }
  console.log(firstNum);
  console.log(secondNum);
  count++;
}

function Num(numText) {
  if (count === 0 && numText === "0" && operator === "") {
    firstNum = 0;
  } else if (
    (count === 0 && numText !== "0") ||
    (count !== 0 && operator === "")
  ) {
    firstNum += numText;

    count++;
  } else if (count1 === 0 && numText === "0" && operator !== "") {
    secondNum = 0;
  } else {
    secondNum += numText;

    count1++;
  }
}

function operator1(oper) {
  if (firstNum !== "") {
    operator = oper;
  }
}

function calc1() {
  console.log(parseInt(firstNum));
  console.log(operator);
  console.log(parseInt(secondNum));
  if (secondNum !== "") {
    switch (operator) {
      case "+":
        alert(parseInt(firstNum) + parseInt(secondNum));
        firstNum = "";
        secondNum = "";
        operator = "";
        break;
      case "-":
        alert(parseInt(firstNum) - parseInt(secondNum));
        firstNum = "";
        secondNum = "";
        operator = "";
        break;
      case "*":
        alert(parseInt(firstNum) * parseInt(secondNum));
        firstNum = "";
        secondNum = "";
        operator = "";
        break;
      case "%":
        alert(parseInt(firstNum) % parseInt(secondNum));
        firstNum = "";
        secondNum = "";
        operator = "";
        break;
      case "/":
        alert(parseInt(firstNum) / parseInt(secondNum));
        firstNum = "";
        secondNum = "";
        operator = "";
        break;
    }
  }
}

// function Num(num1) {
//   console.log(num1);
//   array += num1;
//   console.log(array);
// }
//   console.log(firstNum);
//   firstNumText += num1;
//   firstNum = parseInt(firstNumText);
//   console.log(firstNumText);
//   console.log(firstNum);

// console.log(firstNum);

function sum() {
  //   firstNum = parseInt(array[0]);
  //   secondNum = parseInt(array[1]);
  if (firstNum === undefined || secondNum === undefined) {
    alert("숫자를 제대로 선택하지 않았습니다.");
  } else {
    alert(firstNum + secondNum);
  }
}

function sub() {
  //   firstNum = parseInt(array[0]);
  //   secondNum = parseInt(array[1]);
  if (firstNum === undefined || secondNum === undefined) {
    alert("숫자를 제대로 선택하지 않았습니다.");
  } else {
    alert(firstNum - secondNum);
  }
}

function mult() {
  //   firstNum = parseInt(array[0]);
  //   secondNum = parseInt(array[1]);
  if (firstNum === undefined || secondNum === undefined) {
    alert("숫자를 제대로 선택하지 않았습니다.");
  } else {
    alert(firstNum * secondNum);
  }
}

function div() {
  //   firstNum = parseInt(array[0]);
  //   secondNum = parseInt(array[1]);
  if (firstNum === undefined || secondNum === undefined) {
    alert("숫자를 제대로 선택하지 않았습니다.");
  } else {
    alert(firstNum / secondNum);
  }
}
let numberF = 0;
let returnF = 1;
function factor() {
  numberF = parseInt(firstNum);
  // console.log(numberF);
  while (numberF !== 0) {
    returnF *= numberF;
    numberF--;
  }
  console.log(returnF);
  returnF = 1;
  numberF = 0;
  firstNum = "";
  console.log(firstNum);
  operator = "";
  secondNum = "";
}

function factor(num) {
  if (num == 1 || num == 0) return 1;
  num = parseInt(firstNum);
  return num * (num - 1);
}

function remain() {
  //   firstNum = parseInt(array[0]);
  //   secondNum = parseInt(array[1]);
  if (firstNum === undefined || secondNum === undefined) {
    alert("숫자를 제대로 선택하지 않았습니다.");
  } else {
    alert(firstNum % secondNum);
  }
}

function calc(firstNum, operator, secondNum) {}
