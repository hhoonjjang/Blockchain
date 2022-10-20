const todoList = document.getElementById("list");
// const date = new Date();
let id = 0;
let inputValue;
function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((data) => {
    // let index = 0;
    data.data.list.forEach((todo, index) => {
      const tempElem = document.createElement("li");
      const btn = document.createElement("button");
      btn.innerHTML = "삭제";
      const btn2 = document.createElement("button");
      btn2.innerHTML = "수정";
      const btn3 = document.createElement("button");
      btn3.innerHTML = "확인";

      if (!btn.getAttribute("id")) btn.id = index;
      //   tempElem.innerHTML = todo;
      tempElem.innerHTML = `${todo.text}/ 등록시간:${new Date(todo.time)}`;
      btn.onclick = () => {
        tempElem.remove();
        axios.delete("/api/list?id=" + index);
        console.log(tempElem);
      };
      btn2.onclick = () => {
        let inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.id = "do-name1";
        // tempElem.getElementById("span1").innerHTML = inputBox;
        console.log(tempElem);
        tempElem.innerHTML = "";

        tempElem.prepend(inputBox);
        tempElem.append(btn3);
        console.log(inputBox);
        btn3.onclick = () => {
          let count = 0;
          // console.log(inputBox.value);
          tempElem.innerHTML = `${inputBox.value}/ 등록시간:${new Date(
            todo.time
          )}`;
          tempElem.append(btn);
          tempElem.append(btn2);
          axios.put("/api/list?id=" + count++);
          axios.put("/api/list?name1=" + inputBox.value);
          console.log(inputBox.value);
          console.log(document.forms["todo-form"]["do-name"].value);
          // document.forms["todo-form"]["do-name"].value = inputBox.value;
        };
      };

      tempElem.append(btn);
      tempElem.append(btn2);
      todoList.append(tempElem);
    });
  });
}

document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault(); // << 기본 이벤트를 막는다.

  // XMLHttpRequest => fetch/ajax => axios
  //    http 모듈 = > express 발전순
  axios
    .post("/api/list", {
      name: document.forms["todo-form"]["do-name"].value,
      //   time: date.toLocaleString("ko-kr"),
      id: id++,
      //   btn: btn.toString(),
      time: Date.now(),
      // inputboxtext: "",

      // value1: value1,
    })
    .then((data) => {
      getList();
    });

  //   axios
  //     .delete("/api/list", {
  //       name: document.forms["todo-form"]["do-name"].value,
  //       time: date.toLocaleString("ko-kr"),
  //       id: id++,
  //     })
  //     .then((data) => {
  //       getList();
  //     });

  //   axios.get(
  //     "/api/add?name=" +
  //       document.forms["todo-form"]["do-name"].value +
  //       "&str=" +
  //       "리가원"
  //   );
};

getList();

// axios.put("/api/list", {}).then((data) => {});
