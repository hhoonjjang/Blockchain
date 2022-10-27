const idText = document.getElementById("id");
const pwText = document.getElementById("pw");
const nameText = document.getElementById("name");
const sexText = document.getElementById("sex");
const ageText = document.getElementById("age");

if (document.cookie) {
  console.log("쿠키있어요", document.cookie);
  console.log(document.cookie.split("=")[1].split("."));
  const cookieData = document.cookie.split("=")[1].split(".");
  const data = axios.get("/api/routes/autologin", { cookieData });
}

document.getElementById("sign-up").onclick = async function (e) {
  e.preventDefault();
  // if (!idText.value && !pwText.value) {
  //   console.log("걸렸당ㅇ");
  //   idText.focus();
  //   document.getElementsByClassName("inputBox")[0].classList.toggle("in");
  //   document.getElementsByClassName("inputBtnBox")[0].classList.toggle("in");
  //   return;
  // }

  // if (!e.target["id"].value) {
  //   e.target["id"].focus();
  //   return;
  // }

  if (
    nameText.value &&
    sexText.value &&
    ageText.value &&
    idText.value &&
    pwText.value
  ) {
    try {
      // console.log(document.forms["user"]);
      console.log("hi");
      const data = await axios
        .post("/api/routes/regist", {
          id: document.forms["user"].id.value,
          pw: document.getElementById("pw").value,
          name: document.forms["user"].name.value,
          sex: document.forms["user"].sex.value,
          age: document.forms["user"].age.value,
        })
        .then((data) => {
          document.getElementsByClassName("inputBox")[0].classList.toggle("in");
          document
            .getElementsByClassName("inputBtnBox")[0]
            .classList.toggle("in");
          console.log(data.data);
          ageText.value =
            sexText.value =
            nameText.value =
            pwText.value =
            idText.value =
              "";
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    document.getElementsByClassName("inputBox")[0].classList.add("in");
    document.getElementsByClassName("inputBtnBox")[0].classList.add("in");
    if (!ageText.value) ageText.focus();
    if (!sexText.value) sexText.focus();
    if (!nameText.value) nameText.focus();
    if (!pwText.value) pwText.focus();
    if (!idText.value) idText.focus();
  }
};

document.getElementById("sign-in").onclick = async function (e) {
  e.preventDefault();
  if (!document.forms["user"].id.value || !document.forms["user"].pw.value)
    return;

  const userInfo = await axios.post("/api/routes/userInfoCheck", {
    id: document.forms["user"].id.value,
  });
  console.log(userInfo);
  const data = await axios.post("/api/routes/login", {
    id: document.forms["user"].id.value,
    pw: document.forms["user"].pw.value,
    name: userInfo.data.name,
    age: userInfo.data.age,
    sex: userInfo.data.sex,
  });

  console.log(userInfo.data);
  console.log(data.status);
  console.log(data);
  if (data.status == 200) {
    const userName = document.createElement("div");
    console.log(document.forms["user"].name.value);
    userName.innerText = `${data.data.list.name}님 어서오세요.`;
    document.getElementsByClassName("inputBtnBox")[0].classList.toggle("on");
    document.getElementsByClassName("inputBox")[0].classList.toggle("on");
    document.getElementsByClassName("inputBtnBox")[0].prepend(userName);
    // const tempName = JSON.parse(document.cookie.split("=")[1].split(".")).name;
    // console.log(tempName);
  }
};

axios
  .post("/api/routes/userInfoCheck")
  .then((data) => {
    console.log(data.data);
  })
  .catch((err) => {
    console.log(err);
    alert(err.response.data.mg);
  });
