// scope 는 {}로 묶인것.
// {}를 스코프라고 부른다
// 지역을 나타낸다.
// 지역이라는건 일종의 부분이다.

let a = 0; //모든곳에서 사용할 수 있는 변수를 전역변수

console.log(a);
{
  let a = 2;
  // 지역 스코프내에서 전역 변수가 다시 선언될 경우( 재선언) 전역 스코프의 변수와는 다른 변수로 취급한다.
  let b = 1; //안에서 선언된 변수를 지역변수
  //   지역 변수는 해당 스코프내에서만 사용가능하다.
  console.log(a + b);
  console.log(a);
}

// {}묶인곳을 지역스코프
console.log(a);
// console.log(b);
// 바깥은 전역 스코프

function addA(a) {
  //   let a;
  a++;
  console.log(a);
}

let obj = {
  a: 1,

  func1: function () {
    console.log("돼");
  },

  func: (fn, sn) => {
    return fn + sn;
  },
};

obj.func1();
console.log(obj.func(1, 2));
//  객체 안에 포함된 함수는 메소드라고 부릅니다.
// console 객체 안의 log 메소드
//  Math 객체 안의 random 메소드

// obj 객체 안의 func1, func 메소드

alert("경고!");

// 오늘의 과제: 숫자 선택(2개)를 선택하고 + ,- ,*,/,% 중 하나를 누르면 계산된 값이 alert창으로 출력된다.
