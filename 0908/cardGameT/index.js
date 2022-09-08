let cards = [];
let count;

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
count = parseInt(prompt("셔플횟수를 정하시오"));
cards = shuffle(cards, count);
console.log(cards);

let firstCardIndex = -1;
let secondCardIndex = -1;

function selectNum(cardNum) {
  console.log("firstCard" + firstCardIndex);
  console.log("secondCard" + secondCardIndex);
  const tempElem = document.getElementById("card" + cardNum);
  const firstElem = document.getElementById("card" + firstCardIndex);

  const secondElem = document.getElementById("card" + secondCardIndex);

  if (tempElem.innerHTML) return;
  //   클릭한 div에 값이 있는가? 선택하거나 맞춘 카드.
  if (firstCardIndex > -1 && secondCardIndex > -1) {
    if (cards[firstCardIndex] != cards[secondCardIndex]) {
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
    } else {
      firstElem.style.background = "green";
      secondElem.style.background = "green";
    }
    firstCardIndex = -1;
    secondCardIndex = -1;
  }
  // 매개변수로 받은 cardNum은 id의 'card' 뒤에 붙은 숫자와 동일하게 되어있으며 cardNum과 'card'을 붙여서 id를 찾아옵니다.
  //   tempElem.innerHTML = cards[cardNum - 1];
  if (firstCardIndex < 0) {
    // 첫번쨰 카드를 선택하지 않았는가?
    firstCardIndex = cardNum;
    tempElem.innerHTML = cards[cardNum];
  } else if (secondCardIndex < 0) {
    //  두번째 카드를 선택하지 않았는가?
    secondCardIndex = cardNum;
    tempElem.innerHTML = cards[cardNum];
  }
  //   else if (cards[firstCardIndex] != cards[secondCardIndex]) {
  //     firstElem.innerHTML = "";
  //     secondElem.innerHTML = "";
  //     firstCardIndex = -1;
  //     secondCardIndex = -1;
  //   }
  //   else {
  //     firstCardIndex = -1;
  //     secondCardIndex = -1;
  //   }
  //   찾은 클릭 당한 태그에 내용으로 cards(랜덤으로 배치한 카드들) 중에 cardNum - 1번째(컴퓨터는 0부터 시작하기 때문)
}
