let n;
let start;
let sub;
let end;
n = prompt("하노이탑 몇층?");
let count = 0;
start = prompt("시작점은?");
sub = prompt("중간 기둥");
end = prompt("끝점");
console.log(`${n}층입니다.`);
function hanoi(n, start, sub, end) {
  if (n == 1) {
    console.log(`${n}층:${start},${end}`);
    count++;
    console.log(`이동경로횟수는:${count}번입니다.`);
  } else {
    hanoi(n - 1, start, end, sub);
    console.log(`${n}층:${start},${end}`);
    count++;
    console.log(`이동경로횟수는:${count}번입니다.`);
    hanoi(n - 1, sub, start, end);
  }

  //   console.log(`${n}층이동`);
}

hanoi(n, start, sub, end);
