const router = require("express").Router();
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const userlist = {};

router.use("/", (req, res, next) => {
  console.log(req.cookies["cookie_name"]);
  if (!!req.cookies["cookie_name"]) {
    try {
      console.log(jwt.verify(req.cookies["cookie_name"], "key"));
      jwt.verify(req.cookies["cookie_name"], "key");
      next();
    } catch (err) {
      res.status(401).send({ mg: "token over" });
    }
  } else {
    next();
  }
});

router.post("/regist", (req, res) => {
  if (!userlist[req.body.id]) {
    userlist[req.body.id] = {
      pw: crypto.SHA256(req.body.pw).toString(),
      name: req.body.name,
      sex: req.body.sex,
      age: req.body.age,
    };
    // userlist.name = req.body.name;
    // userlist.sex = req.body.sex;
    // userlist.age = req.body.age;
    // userlist[req.body.id] = {
    //   nmae: req.body.name,
    //   sex: req.body.sex,
    //   age: req.body.age,s
    // };
    // console.log(userlist);
    // const tempJWT = jwt.sign(userlist, "key", {
    //   algorithm: "HS256",
    //   expiresIn: "5m",
    //   issuer: "jjh",
    // });

    // console.log(tempJWT);
    // const tempData = jwt.verify(tempJWT, "key");
    // console.log(jwt.verify(tempJWT, "key"));
    // console.log(new Date(tempData.iat * 1000).toLocaleString());
    // console.log(new Date(tempData.exp * 1000).toLocaleString());
    // console.log("req바디아이디패스워드체크");
    res.send({ status: 200, data: "regist", userlist });
  } else res.send({ status: 402, data: "exist id", userlist });
});

router.post("/login", (req, res) => {
  console.log("hi");
  console.log(req.body);
  console.log("hi");
  console.log(userlist[req.body.id], crypto.SHA256(req.body.pw).toString());
  if (userlist[req.body.id].pw === crypto.SHA256(req.body.pw).toString()) {
    const tempJWT = jwt.sign(userlist, "key", {
      algorithm: "HS256",
      expiresIn: "1m",
      issuer: "jjh",
    });

    console.log(tempJWT);
    const tempData = jwt.verify(tempJWT, "key");
    console.log(tempData);
    console.log("중간점검");
    console.log(req.body.id);
    const cookie_name = "cookie_name";
    res.cookie(cookie_name, tempJWT, {
      expires: new Date(Date.now() + 1000 * 60),
    });
    res.send({ data: "login", list: userlist[req.body.id] });
  } else {
    res.send({ data: "wrong password", userlist });
  }
});

router.post("/autologin", (req, res) => {});

router.post("/userInfoCheck", (req, res) => {
  res.send(userlist[req.body.id]);
});

module.exports = router;
