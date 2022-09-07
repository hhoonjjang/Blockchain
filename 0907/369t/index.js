const three = function () {
  const count = parseInt(prompt("3!,6!,9! 3!6!9!몇까지?"));

  for (let i = 1; i < count + 1; i++) {
    if (
      i.toString().includes("3") ||
      i.toString().includes("6") ||
      i.toString().includes("9")
    ) {
      let number = `${i}`;
      let text = "";
      //   짝을 입력해서 출력하기위해 text를 선언한다. 빈 문자열로 초기화.
      for (let j = 0; j < number.length; ++j) {
        if (!(parseInt(number[j]) % 3) && number[j] != "0") text += "짝!";
      }
      console.log(text);
    } else {
      console.log(i);
    }
  }

  for (let i = 0; i < count + 1; i++) {
    let numbers = `${i}`;
    if (numbers.match(/[3,6,9]/)) {
      console.log(
        i +
          numbers
            .split("")
            .map((item) => (!(parseInt(item) % 3) && item != "0" ? " 짝!" : ""))
            .join("")
      );
    } else console.log(i);
  }
};
