console.log("");

const randomNum = Math.floor(Math.random() * 99 + 1);
// parseInt(Math.random()* 99 +1)
let inputNum;

let countNum = 0;
// comSel 변수 뽑기
let updown = "";
let min = 0;
let max = 100;
let intNum;
// do {
const Life = parseInt(prompt("목숨갯수를 입력해"));
//   alert(typeof Life);
// } while (typeof Life !== Number(intNum));
// console.log(`${randomNum}`);
do {
  inputNum = Number(
    prompt(
      `${updown}\n수를 입력하세요.\n 최소:${min} 최대:${max} \n 남은횟수:${
        Life - countNum
      }`
    )
  );

  if (inputNum === randomNum) {
    alert(`정답입니다 ${++countNum}번만에 맞췄습니다`);
  } else if (min >= inputNum || inputNum >= max) {
    alert(`범위안의 숫자를 입력하세요.입력 범위는 ${min}~${max}까지입니다. `);
  } else if (inputNum <= randomNum) {
    alert(`업입니다.`);
    min = inputNum;
    updown = "UP";
    countNum++;
  } else if (inputNum >= randomNum) {
    alert(`다운입니다.`);
    updown = "Down";
    max = inputNum;
    countNum++;
  } else {
    alert(`올바른 숫자를 입력하세요.`);
  }
} while (inputNum !== randomNum && countNum < Life);

if (countNum >= Life) {
  console.log("Game Over");
}
