//함수란 기능을 실행하는 코드에 이름을 지은 것이다.
//변수가 데이터에 이름을 짓는다.
function test() {
  //function 이름(){}
  //{}안에 실행할 코드가 들어갑니다.
  //()안에 함수를 사용할 떄 함수에게 줄 정보를 입력한다. 매개변수

  console.log("넣고싶은거 넣어");
  alert("넣어");
  confirm("넣어");
}

function test1() {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화 하는 방식을 : 함수 선언문");
  // function 이름(){} << 함수 선언문이다.
}

let test2 = function () {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화 하는 방식 : 함수 표현식");
  // const/let 이름 =function(){}<<함수 표현식이다.
};

const test3 = () => {
  console.log("함수를 초기화합니다.");
  console.log("해당 형식으로 함수를 초기화하는 방식: 화살표함수");
  //const/let 이름 =()=>{}
};

test1();
test2();
test3();
// 함수를 호출하는 방법 함수에있는 코드를 실행한다.

//매개변수란 함수에게 데이터를 전달한다.
//함수가 사용해야할 데이터를 호출할 때 전해준다.

function addFunc(firstNum, secondNum) {
  //firstNum,scondNum 매개변수다.
  console.log(firstNum + secondNum);
}

addFunc(2, 3);

function addFunc2(firstNum, secondNum) {
  return firstNum + secondNum;
  // return, 되돌린다, 반환값, addFunc2가 끝났을 때 함수가 반출하는? 돌려주는? 값이다.
}
let answer = addFunc2(6, 14);
console.log(answer);
// addFunc2 함수는 return이 있기 때문에 answer 변수에 addfunc2의 return값이 정의된다.

answer = addFunc(56, 3);
// addFunc 함수는 return이 없기 떄문에 answer 변수에 정의되지 않았다를 뜻하는 undefined가 정의된다.
console.log(answer);

console.log(Math.random());

console.log(console.log("asdf"));
console.log(console.log(addFunc2(1, 2)));
// 제일밖의 콘솔로그 실행시 매개변수로 2번째 콘솔로그
//2번쨰 콘솔로그를 실행 -> 매개변수로 addFunc2
// addFunc2 실행-> return 1+2=> 3
// 2번쨰 콘솔로그가 3을 로그 출력
// 2번째 콘솔로그가 return값을 첫번쨰 콘솔로그 로그로 출력
// 콘솔로그는 return 값이 없다 =>undefined

function sel(num) {
  switch (num) {
    case 1:
      return "검";
      //   이 아래 console.log는 출력되지 않는다 이유는 return으로 값을 반환하고 끝난다.
      console.log("검을 선택했어요.");
      break;
    case 2:
      return "활";
      break;
    case 3:
      return "방패";
      break;
    case 4:
      return "도끼";
      break;
    default:
      return false;
  }
}

let playerSel;
do {
  playerSel = prompt("무기를 선택하세요.");
  //   플레이어 선택을받는다
  playerSel = sel(parseInt(playerSel));
  //   sel 함수를 호출하며위에서 받은 선택을 정수로 바꾸어 전달한다.
  // sel은 받은 정수 (매개변수, 플레이서 선택한 수) 를 사용해서 값을 반환한다.
  // sel이 반환한 값을 playerSel에서 다시 정의한다.(재정의)
} while (!playerSel);
