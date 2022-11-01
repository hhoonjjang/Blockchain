const router = require("express").Router();
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const userlist = {};

router.post("/regist", async (req, res) => {
  console.log(userlist);
  if (!userlist[req.body.id]) {
    userlist[req.body.id] = {
      pw: Cryptojs.SHA256(req.body.pw).toString(),
      name: req.body.name,
    };
    console.log(userlist);
    res.send({ status: 200, data: "regist", userlist });
  } else {
    console.log("중복되었다");
    // res.send({ status: 402, data: "exist id", userlist });
    res.status(500);
    res.send({ message: "exist ID" });
    return;
    // res.send({ data: "exist id" });
  }
});

router.post("/login", (req, res) => {
  console.log(req.body);
  console.log(userlist);
  if (userlist[req.body.id].pw === Cryptojs.SHA256(req.body.pw).toString()) {
    console.log("시험");
    console.log(userlist[req.body.id].name);
    console.log("시험");

    res.cookie(
      "key1",
      jwt.sign(
        {
          id: req.body.id,
          name: userlist[req.body.id].name,
        },
        process.env.JWT_KEY,
        {
          algorithm: "HS256",
          expiresIn: "3m",
          issuer: "jjh",
        }
      )
    );
    res.send({ name: userlist[req.body.id].name });
    return;
  } else {
    console.log("hi");
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("key1");
  res.end();
});
module.exports = router;
