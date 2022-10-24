document.getElementById("sign-up").onclick = async function (e) {
  e.preventDefault();
  try {
    // console.log(document.forms["user"]);
    const data = await axios.post("/api/routes/regist", {
      id: document.forms["user"].id.value,
      pw: document.getElementById("pw").value,
    });
    console.log(data.data);
  } catch (err) {
    console.error(err);
  }
};

document.getElementById("sign-in").onclick = async function (e) {
  e.preventDefault();
  const data = await axios.post("/api/routes/login", {
    id: document.forms["user"].id.value,
    pw: document.forms["user"].pw.value,
  });
  console.log(data.data);
  console.log(data.data.data);
  console.log(id.value);
};
