const inputData = prompt("수를 입력하세요\n Ex)짝 숫자");

let data;
data = inputData.split(" ");
console.log(data);
if (data[0] == "홀") {
  for (let i = 1; i <= data[1]; i += 2) {
    console.log(i);
  }
} else {
  for (let i = 0; i <= data[1]; i += 2) {
    console.log(i);
  }
}
