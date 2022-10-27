document.getElementById("menu-btn").onclick = function (e) {
  document.getElementById("user-input-container").classList.toggle("on");
};

document.getElementById("board-add").onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value) {
    e.target["board-title"].focus();
    return;
  }
  if (!e.target["board-text"].value) {
    e.target["board-text"].focus();
    return;
  }
  try {
    const data = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
      uptime: Date.now(),
    });

    if (data.data.status != 200) {
      e.target["board-title"].value = e.target["borad-text"].value = "";
    }
  } catch (err) {
    console.error(err);
  }
  getList();
  //   console.log(e.target["board-title"].value);
  //   console.log(e.target["board-text"].value);
};

const tempData = [
  [
    {
      title: "asdsad1",
      text: "fsdfdsf",
    },
    {
      title: "asdsad2",
      text: "fsdfdsf",
    },
    {
      title: "asdsad3",
      text: "fsdfdsf",
    },
    {
      title: "asdsad4",
      text: "fsdfdsf",
    },
    {
      title: "asdsad5",
      text: "fsdfdsf",
    },
  ],
  [
    {
      title: "asdsad6",
      text: "fsdfdsf",
    },
    {
      title: "asdsad7",
      text: "fsdfdsf",
    },
    {
      title: "asdsad8",
      text: "fsdfdsf",
    },
    {
      title: "asdsad9",
      text: "fsdfdsf",
    },
    {
      title: "asdsad10",
      text: "fsdfdsf",
    },
  ],
];

let count = 0; //현재페이지

const pageElem = document.getElementById("page");

const listElem = document.getElementById("list");

async function getList() {
  try {
    const data = await axios.get("/api/board?count=" + count);

    pageElem.innerHTML = "";
    maxCount = data.data.maxCount;
    for (let i = 0; i < maxCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerText = i + 1;
      tempLi.onclick = function (e) {
        count = i;
        pageElem.getElementsByClassName("now")[0].classList.remove("now");
        tempLi.classList.add("now");
        getList();
      };

      if (count === i) {
        tempLi.classList.add("now");
      }
      pageElem.append(tempLi);
    }
    listElem.innerHTML = "";
    data.data.list.forEach((data, index) => {
      // tempData[count].forEach((data) => {
      const tempLi = document.createElement("li");
      const tempTitle = document.createElement("div");
      const tempH3 = document.createElement("h3");
      const tempImg = document.createElement("img");
      const tempText = document.createElement("div");
      const tempP = document.createElement("p");
      const tempTextarea = document.createElement("textarea");
      const tempBtnBox = document.createElement("div");
      const tempDelBox = document.createElement("img");
      const tempEditBox = document.createElement("img");
      const tempCancelCBox = document.createElement("img");

      tempTitle.classList.add("title");
      tempTitle.onclick = function (e) {
        tempText.classList.toggle("on");
        tempImg.classList.toggle("on");
        tempText.classList.remove("edit");
      };
      tempText.classList.add("text");
      tempImg.src = "./imgs/angle-up-solid.svg";
      tempImg.alt = "list-item-btn";
      tempH3.innerText = data.title;
      tempP.innerText = data.text;
      tempTextarea.value = data.text;

      tempBtnBox.classList.add("list-btn-box");
      tempDelBox.src = "./imgs/minus-solid.svg";
      tempDelBox.alt = "delete-btn";
      tempDelBox.classList.add("delete");
      tempDelBox.onclick = async function (e) {
        try {
          const data = await axios.post("/api/board/delete", {
            count,
            num: index,
          });
          getList();
          console.log(data.data);
        } catch (err) {
          console.log(err);
        }
      };

      tempEditBox.src = "./imgs/plus-solid.svg";
      tempEditBox.onclick = async function (e) {
        if (tempText.classList.contains("edit")) {
          try {
            const data = await axios.post("/api/board/update", {
              count,
              num: index,
              text: tempTextarea.value,
              time: Date.now(),
            });
            getList();
            console.log(data.data);
          } catch (err) {
            console.log(err);
          }
        } else {
          tempTextarea.value = data.text;
          tempText.classList.add("edit");
        }
      };
      tempEditBox.alt = "edit-btn";

      tempCancelCBox.src = "./imgs/rectangle-xmark-regular.svg";
      tempCancelCBox.alt = "cancel-btn";
      tempCancelCBox.classList.add("cancel");
      tempCancelCBox.onclick = function (e) {
        tempText.classList.remove("edit");
      };

      tempBtnBox.append(tempEditBox);
      tempBtnBox.append(tempDelBox);
      tempBtnBox.append(tempCancelCBox);

      tempTitle.append(tempH3);
      tempTitle.append(tempImg);
      tempText.append(tempP);
      tempText.append(tempTextarea);
      tempText.append(tempBtnBox);
      tempLi.append(tempTitle);
      tempLi.append(tempText);
      listElem.append(tempLi);
    });
  } catch (err) {
    console.error(err);
  }
}
getList();

document.getElementById("sign-in").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/user/login", {
    id: document.forms["user-info"].id.value,
    pw: document.forms["user-info"].pw.value,
    name: document.form["user-info"].name.value,
  });
  console.log(data.data);
};
document.getElementById("sign-up").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/user/regist", {
    id: document.forms["user-info"].id.value,
    pw: document.forms["user-info"].pw.value,
    name: document.form["user-info"].name.value,
  });
  console.log(data.data);
  console.log(document.cookie);
};

// form 안에 있는 button은 기본적으로 form의 submit을 실행

// axios.post("/api/board/add").then((data) => {
//   console.log(data);
// });
