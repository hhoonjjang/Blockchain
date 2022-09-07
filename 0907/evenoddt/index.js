function odd(count) {
  //  odd클릭 시 count는 입력된 값이 없기 때문에 undefined가 된다.
  if (!count) count = prompt("몇까지 찍을까?");
  // undefined는 boolean 값으로 따졌을 때 false 되기 때문에 매개변수가 없는지 확인하여 입력받을 수 있도록 처리한다.
  count = parseInt(count);
  // oddeven 함수에서 전달받은 count는 문자열(string)기 때문에 parseInt 함수를 호출하여 정수로 변환해준다.

  for (let i = 0; i <= count; i++) {
    if (i % 2) console.log(i);
  }
  for (let i = 0; i < count / 2; i++) {
    console.log(i * 2 + 1);
  }
}

const even = function (count) {
  if (!count) count = prompt("몇까지 찍을까?");
  count = parseInt(prompt);
  for (let i = 0; i <= count; i++) {
    if (!(i % 2)) console.log(i);
  }
  for (let i = 0; i < (count + 1) / 2; i++) {
    console.log(i * 2);
  }
};

const oddeven = () => {
  const count = prompt("몇까지 찍을까? 그리고 홀이야? 짝이야\n 형식은 n&홀짝");
  //   '123&홀' 형식의 문자열(string) 받게된다.
  //   split 메서드를 호출해서 &를 기준으로 분리한다.
  // 문자열(string) 아이템을 가진 배열을 반환(리턴)
  // ->['123','홀']
  const number = count.split("&")[0];
  const isOdd = count.split("&")[1];

  if ((isOdd = "홀")) {
    // 홀이면 odd함수를 호출 숫자 number를 매개변수로 전달함
    odd(number);
  } else {
    even(number);
  }
};
