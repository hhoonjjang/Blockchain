const str = "abcDeFgHJklmn";
console.log(str.indexOf("D"));
console.log(str.indexOf("cD")); //시작위치를 찾는다
console.log(str.indexOf("cDY"));

console.log(str.length);
console.log(str.slice(1, 3));
// 0 a 1 b 2 c 3 D 4 e 5 F 6 g....

console.log(str.split(/D/));
//매개변수로 전달된 정규표현식(어렵다?)을 기준으로 짜른다.
//정규표현식은 후에 하루 왠종일 해야한다.
console.log(str.split(""));

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.match());

console.log(str.replace(/D/, "a"));
//1번쨰 매개변수로 정규표현식을 전달하고, 두번 쨰 매개변수로 바꾸고싶은 텍스트를 전달한다.

console.log(
  "매개변수로 전달된 정규표현식(어렵다?)을 기준으로 짜른다.".split(/ /)
);
