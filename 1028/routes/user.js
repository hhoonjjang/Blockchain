const router = require("express").Router();
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const { User } = require("../models/index.js");
//   const tempUser = User.findeOne({ where: req.body.id });
router.post("/regist", async (req, res) => {
  console.log(req.body);
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });
    console.log(tempUser);
    if (tempUser) {
      res.status(500);
      res.send({ message: "exist ID" });
      return;
    }
    const { id, pw, name, className } = req.body;
    await User.create({
      userId: id,
      userPw: Cryptojs.SHA256(pw).toString(),
      name,
      class: className,
    });
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const tempUser = await User.findOne({ where: { userId: req.body.id } });
    console.log(tempUser);
    if (!tempUser) {
      res.status(500);
      res.send({ message: "No ID" });
      return;
    }
    if (tempUser.userPw == Cryptojs.SHA256(req.body.pw).toString()) {
      res.cookie(
        "sid",
        jwt.sign(
          {
            id: tempUser.id,
            name: tempUser.name,
          },
          process.env.JWT_KEY,
          {
            algorithm: "HS256",
            expiresIn: "30m",
            issuer: "jjh",
          }
        )
      );
      res.send({ name: tempUser.name });
      return;
    }
    res.status(500);
    res.send({ message: "wrong password" });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("sid");
  res.end();
});

module.exports = router;
