const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const userlist = {};
router.post("/regist", (req, res) => {
  if (!userlist[req.body.id]) {
    userlist[req.body.id] = crypto.SHA256(req.body.pw).toString();
    console.log("req바디아이디패스워드체크");
    res.send({ status: 200, data: "regist", userlist });
  } else res.send({ status: 402, data: "exist id", userlist });
});

router.post("/login", (req, res) => {
  console.log("hi");
  console.log(req.body);
  console.log("hi");
  if (userlist[req.body.id] === crypto.SHA256(req.body.pw).toString()) {
    res.send({ status: 200, data: "login", userlist });
  } else {
    res.send({ status: 401, data: "wrong password", userlist });
  }
});

module.exports = router;
