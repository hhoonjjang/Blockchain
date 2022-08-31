console.log("개발자도구 콘솔창에 로그를 남긴다.");
console.log("fabicon 오류 무시");

console.log('1 === "1" : ' + (1 === "1"));

if (1 < 2) {
  console.log("1 < 2는 true다");
} else {
  console.log("1 > 2 는 false다");
}

if (1 < 2) console.log("1 < 2는 true다");
// if에서 조건이 참이어서 해당 코드가 실행되면 elseif, else 등ㄷ 아래의 코드를 건너뛴다.
// 즉,아래 코드는 실행하지 않는다
if (1 < 2) console.log("1 > 2 는 false다");
// 위의 if, lese if의 조건이 모두 충족되지 않았을 때 최후의 보루로 실행되는 코드다.
// 한줄이 코드면 {}가 없어도된다.
// if (1<2)console.log("1<2는 true다");
// console.log('asdf')
// else console.log("1>2는 false다");
//  if 와 elseif, else는 함께 붙어다녀야 한다.
// elseif 는 else와 if 합쳐진 것
if (1 > 2) {
  console.log("여기 조건이 거짓이면서");
} else if (2 < 3) {
  console.log("여기 조건이 참이면else if의 {}코드가 실행된다.");
} else {
  console.log("위의 if, else if 의 모든 조건이 거짓일때 실행된다.");
}

console.log(1 < 2 ? "이건참이야" : "거짓일때");

let test1 = 5;
let test2 = 7;

if (test1 < test2) {
  console.log("ㅎㅇ");
} else {
  console.log("ㅂ2");
}

let inputData;
inputData = prompt(" 넣고 싶은 값을 입력하시오.");
// switch는 여러 조건을 한번에 확인한다.
//prompt로 받는 내용은 전부 string 처리
// 숫자로의 형변환 => number(***) || +***||parseInt() || parseFloat(***)
// 우리의 적 NaN

switch (inputData) {
  case "1":
    console.log("1넣음");
    break;
  case "2":
    console.log("2넣음");
    break;

  case "3":
    console.log("3넣음");
    break;

  case "4":
    console.log("4넣음");
    break;
  case "5":
    console.log("5넣음");
    break;
  case "6":
    console.log("6넣음");
    break;
  default:
    console.log("꺼져");
  // if else에서 else와 같은놈이다. 즉 case에서 걸리지 않으면 실행되는 마지막 보류이다.
}
