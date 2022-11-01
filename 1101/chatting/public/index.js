//document.getElementById("sign-up-btn").onclick;

document.forms["sign-up"].onsubmit = async function (e) {
  e.preventDefault();
  if (
    !e.target["user-id"].value ||
    !e.target["user-pw"].value ||
    !e.target["user-name"].value
  )
    return;
  try {
    console.log(e.target["user-id"].value);
    const result = await axios.post("/api/user/regist", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
      name: e.target["user-name"].value,
    });
    console.log(result);
  } catch (error) {
    console.error(error.response.data.message);
  }
};
let curId = "";
document.forms["sign-in"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["user-id"].value || !e.target["user-pw"].value) return;

  try {
    const result = await axios.post("/api/user/login", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
    });
    curId = result.data.name;
    const userName = document.createElement("div");
    userName.setAttribute("id", "username");
    userName.innerText = `${result.data.name}님 어서오세용!.`;
    document.getElementById("usernamedisplay").prepend(userName);
    document.getElementById("sign-in").classList.add("on");
    document.getElementById("sign-out-btn").style.display = "block";
    console.log(result.data.name);
  } catch (error) {
    console.error(error.response.data.message);
  }
};

// console.log(document.getElementById("sign-out-btn"));
document.getElementById("sign-out-btn").onclick = async function () {
  //   console.log("ih");
  try {
    await axios.get("/api/user/logout");
    curId = "";
    document.getElementById("username").remove();
    document.getElementById("sign-in").classList.remove("on");
    document.getElementById("sign-out-btn").style.display = "none";
  } catch (error) {
    console.error(error);
  }
};
function socket() {
  const socket = io();
  const sendBtn = document.getElementById("send-msg");
  const inputElem = document.getElementById("chatting");

  sendBtn.onclick = function () {
    // const result = axios.get("/api/user/login");
    socket.emit("hi", {
      name: curId,
      text: inputElem.value,
      cookie: document.cookie,
    });
    // console.log(result);
  };
  socket.on("abc", (data) => {
    alert(data);
  });
  socket.on("message1", (data) => {
    const texts = document.createElement("div");
    texts.innerText = `${data.name}님:${data.text}`;
    document.getElementById("chatDisplay").appendChild(texts);
    inputElem.value = "";
    console.log(data);
  });
  socket.on("1234", () => {
    console.log(document.cookie);
    socket.emit("12345", {
      name: curId,
      text: inputElem.value,
      cookie: document.cookie,
    });
  });
}
socket();

// console.log(document.getElementById("sign-up-btn"));
// document.getElementById("sign-up-btn").onclick = () => {
//   console.log("hi");
// };
