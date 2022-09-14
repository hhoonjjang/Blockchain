// todolist =>할일 목록 페이지 구현하기
// 목록화된 할일 페이지 출력
// input 엘레먼트를 사용해서 할일을 추가한다.
// 삭제 버튼을 사용해서 삭제하거나 삭제 표시를 한다.

const toDoHeader = [
  { type: "ranked", name: "우선순위" },
  { type: "wish", name: "해야할 일" },
  //   { type: "del", name: "해야할 일" },
  //   { type: "modify", name: "해야할 일" },
];

let toDoList = [];

function cratewishList(wish) {
  toDoList.push({
    wish,
  });
}
// cratewishList("ㅎㅇㅎㅇㅎㅇ");
console.log(toDoList);

const tableHeaderElem = document.getElementById("header");
toDoHeader.forEach((item) => {
  tableHeaderElem.innerHTML += "<th>" + item.name + "</th>";
});

const tableBodyElem = document.getElementById("wishlist");

document.getElementById("add").onclick = () => {
  let wishData = document.getElementById("wish").value;
  console.log(wishData);
  cratewishList(wishData);
  console.log(toDoList);
  let tempStr;
  toDoList.forEach((item, index) => {
    tempStr = `<tr id=del${index}>`;
    toDoHeader.forEach((headItem) => {
      if (headItem.type === "ranked") tempStr += `<th>${index}</th>`;
      else
        tempStr += `<td id=modify${index}>${
          item[headItem.type]
        } <button  onclick="del(${index})" class=del>삭제</button>
        <button onclick="modify(${index})" class=modify>수정</button></td>`;
    });
    tempStr += "</tr>";
    console.log(tempStr);
  });
  tableBodyElem.innerHTML += tempStr;
  document.getElementById("wish").value = "";
};

function del(index) {
  console.log(tableBodyElem[index]);
  // toDoList[index] = "";
  document.getElementById(`del${index}`).remove();
  // tableBodyElem.innerHTML = "";
}

function modify(index) {
  let dataValue = prompt("수정할 내용");
  console.log(document.getElementById(`modify${index}`));
  console.log(`modify${index}`);
  dataValue += `<button onclick="del(${index})">삭제</button> <button onclick="modify(${index})">수정</button>`;
  document.getElementById(`modify${index}`).innerHTML = dataValue;
}
// function del(index) {
//   document.getElementById(`del${index}`).remove();
//   console.log(toDoList);
// }
// document.getElementById("del1").onclick = () => {
//   console.log("ㅎㅇ");
//   del(index);
// };

// document.getElementsByClassName("modify").onclick = () => {};
