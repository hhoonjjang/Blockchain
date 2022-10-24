const router = require("express").Router();
const userArr = [];
const userlist = {};
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/regist", (req, res) => {
  const tempJWT = jwt.sign({ name: "test" }, "saddasdsad", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "jjh",
  }); //jwt 생성
  console.log("hi");
  console.log(tempJWT);
  const tempData = jwt.verify(tempJWT, "saddasdsad"); //jwt 파싱
  console.log(tempData);
  console.log("hi");

  // 쿠키는 임시 데이터를 브라우저에 저장한다.
  //  크롬에서 로그인한게 쿠키에 남아있다.>>파이어폭스에서 연동
  // 쿠키 추가 데이터공간이 다르다 쿠키 저장한 파일이 다르다.
  const cookie_name = "cookie_name",
    cookie_data = "now testing";

  //   res.cookie("cookie_name", "now testing", {
  res.cookie(cookie_name, cookie_data, {
    expires: new Date(Date.now() + 30 * 1000),
    // 단위가 ms , 1ms = 0.001s =>1000ms = 1s
  });
  // 응답 쿠키 추가

  if (!userlist[req.body.id]) {
    userlist[req.body.id] = crypto.SHA256(req.body.pw).toString();
    // userlist['asdf'] = req.body.pw '2134';

    // userlist[req.body.id] = { pw: req.body.pw, name: req.body.name };

    console.log("hi");
    res.send({ status: 200, data: "regist", userlist });
  } else {
    res.send({ status: 402, data: "exist id", userlist });
  }
  //   userArr.push(req.body);
});

router.post("/login", (req, res) => {
  console.log(req.cookies.cookie_name);
  console.log("시험");

  console.log(req.body);
  console.log(userlist);
  //   if (userArr.find((data) => data.id === req.body.id)?.pw === req.body.pw) {
  if (userlist[req.body.id] === crypto.SHA256(req.body.pw).toString()) {
    res.send({ status: 200, data: "login" });
  } else {
    res.send({ status: 401, data: "wrong password", userlist });
  }
});

module.exports = router;
