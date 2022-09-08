// 정규표현식
const reg1 = /aa/;
const reg2 = new RegExp("aa");
// 규칙을 가진 문자열을 찾기 위해 사용한다.
const tempReg = /[3,6,9]/;
//[] 내부 중의 하나 = > 3 || 6 || 9
const tempReg1 = /[0-9]/;
// 재혁이가 좋아하는 ~, 0부터 9다
const koreanReg = /가-힣/;

let emailReg =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_.]?[0-9a-zA-z])*.[a-zA-Z]{2,3}$/i;
// x*은 횟수와 상관없이 들어가는 문자 <= x를 몇번이고 넣을 것을 찾는다.
// ^x => x로 시작한다.
// x? => x가 없거나 딱 한번 들어간다.

// \w => 문자나 숫자다

// \s => 공백 띄어쓰기 엔터 등등.(띄어쓰기, 탭, 줄바꿈 등등)
// {}=>개수다, 몇개인가? =>2개이상 3개이하
// x$=> x로 끝난다.
// 정규표현식 뒤에 붙는 문자들(플래그) => ex)i
// i는 대소문자 무시, g는 중복가능.
//  i는 대소문자를 구분하지않고 사용
// const inputEmail = prompt("이메일입력해라");
// console.log(inputEmail.match(emailReg).join(""));
console.log("sadfadfadfadfvadfadfs".replace("fa", ""));
console.log("sadfadfadfadfvadfadfs".replace(/fa/g, ""));
// console.log("dasdsad".replace(\*\*[/]-/g,""));
