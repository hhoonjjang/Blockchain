let i = 0;
// i = index, git은 아예 다르게 index용어를 사용한다.
//

while (i < 10) {
  // while은 반복문의 명령어 중 하나다.
  // ()안의조건이 충족되면 실행된다
  // {}안의 코드를 실행한 후 ()안의 조건을 확인한다.

  console.log("i = " + ++i);
}

let j = 0;
while (j < 10) {
  console.log("j= " + j++);
}

while (true) {
  console.log(new Date());
  if (--i < 1) break;
}

let k = 0;
do {
  // do while 조건을 확인하기 전에 실행
  console.log("k = " + ++k);
  // k를 출력하고 조건을 확인한다
} while (k < 10);

console.log(i);

while (i !== 0) {
  console.log("asdf1");
}
do {
  console.log("asdf2");
} while (i !== 0);

//

// while(true)console.log(new Date())
// 브라우저 멈추고싶으면 위코드를 실행하시오
