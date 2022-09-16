hositing();
console.log(a);
var a = 1;
console.log(a);

// 선언(초기화)하기 전에 호출해서 사용하는 현상을 호이스팅이라고한다.
// 공식적으로 hositing 은 var를 사용시 javascript가 최상단에서 미리 선언하는 것을 말한다.

// var, function으로 가능하다.

// hoisting 은 지양해라.
function hositing() {
  console.log(++a);
}
hositing();

let expressionHoisting = function () {
  // 함수 표현식을 사용하자.
  console.log(++a);
};

const arrowHoisting = () => {
  console.log(++a);
};

arrowHoisting();

// ========================

// 구조분해할당

const tempArr = [1, 2, 3, 4, 5];

const [aa, bb, ...cc] = tempArr;

console.log(aa);
console.log(bb);
console.log(cc);
const tempObj = {
  aaa: 11,
  bbb: 22,
  ccc: 33,
};
const { aaa, bbb, ccc } = tempObj;
console.log(aaa);
console.log(bbb);
console.log(ccc);
