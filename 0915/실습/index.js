let coinAmount = 1000;
let count = 0;
document.getElementById("powerButton").onclick = () => {
  if (count % 2 == 0) {
    calc();
    change();
  } else {
    reset();
  }
  count++;
};

function insert() {
  coinAmount += 1000;
}

document.getElementById("insert").onclick = () => {
  insert();

  calc();
};

function calc() {
  document.getElementById("coinAmount").innerText = coinAmount;
}
function reset() {
  document.getElementById("coinAmount").innerText = "";
  coinAmount = 1000;
  document.getElementById("change").innerHTML = "";
}

let changeIndex = 0;

function change() {
  {
    if (count % 2 == 0) {
      document.getElementById("change").innerHTML = `<img src="${
        changeIndex % 3
      }.PNG" alt=""/>`;
      obTimeout = setTimeout("change()", 1000);
    }
    // else {
    //   clearTimeout(obTimeout);
    // }
    //   document.getElementById("change").innerHTML = `<img src="0.PNG" alt="">`;
  }
  changeIndex++;
}

let obTimeout;
let changeArray = [];
changeArray[0] = "0.png";
changeArray[1] = "1.png";
changeArray[2] = "2.png";
console.log(changeArray);
