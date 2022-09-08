const today = new Date();

console.log(today);
console.log(today.toLocaleString());
console.log(today.toUTCString());

console.log(today.getDate());
console.log(today.getDay()); // 요일을 0~6(일~토)로 출력

console.log(today.getMonth());

console.log(Date.now());
console.log(new Date(Date.now()));
