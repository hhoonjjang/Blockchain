// let cardCount;

const start = () => {
  if (document.getElementById("gameboard").innerHTML != "") {
    remove();
  }
  const cardCount = prompt("카드장수를 입력하세요");
  console.log(cardCount);
  createDiv(cardCount);
};

function createDiv(cardCount) {
  if (!cardCount) {
    cardCount = parseInt(prompt("카드장수를 다시입력하세요"));
    console.log(cardCount);
  }
  console.log(cardCount);
  const cards = [];
  for (let i = 0; i < cardCount; i++) {
    cards.push(i + 1);
    cards.push(i + 1);
  }

  console.log(cards);

  for (let i = 0; i < 20; i++) {
    const firstCard = parseInt(Math.random() * cards.length);
    const secondCard = parseInt(Math.random() * cards.length);
    const temp = cards[firstCard];
    cards[firstCard] = cards[secondCard];
    cards[secondCard] = temp;
  }
  console.log(cards);

  for (let i = 0; i < cards.length; i++) {
    let div = document.createElement(`div`);
    div.innerHTML = document.getElementById("parent").innerHTML = cards[i];
    div.classList.add(cards[i]);
    document.getElementById("gameboard").appendChild(div);
    div.addEventListener("click", pick());
    div.id = "test" + cards[i];
    // let click = document.querySelectorall(".class1");
    // click.addEventListener("click", function () {
    //   alert("hello");
    // });
    // console.log(click);
    // div.addEventListener("click", pick(div.classList));
  }
}
function remove() {
  document.getElementById("gameboard").innerHTML = "";
  // document.getElementById("gameboard").removeChild(obj.parentNode);
}
// const cards = [];

function pick(e) {
  console.log("gd");
}

// let cols = document.querySelectorAll("#gameboard .class1");
// console.log(cols);
// for (var i = 0; i < cols.length; i++) {
//   cols[i].addEventListener("click", click);
// }
// cols[1].style.color = "red";

// for (let i = 0; i < parseInt(8); i++) {
//   cards.push(i + 1);
//   cards.push(i + 1);
// }

// console.log(cards);

// for (let i = 0; i < 16; i++) {
//   const firstCard = parseInt(Math.random() * cards.length);
//   const secondCard = parseInt(Math.random() * cards.length);
//   const temp = cards[firstCard];
//   cards[firstCard] = cards[secondCard];
//   cards[secondCard] = temp;
// }
// console.log(cards);
