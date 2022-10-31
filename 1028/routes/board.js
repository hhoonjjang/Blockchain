const router = require("express").Router();
const { User, Board } = require("../models/index.js");
const jwt = require("jsonwebtoken");
// Board.create({ title: "1", text: "1" });

// const jwt = require("jsonwebtoken");

router.use("/", (req, res, next) => {
  // 미들웨어
  global.userId = "";
  try {
    const tempUserInfo = jwt.verify(req.cookies.sid, process.env.JWT_KEY);
    global.userId = tempUserInfo.id;
    res.cookie(
      "sid",
      jwt.sign(
        {
          id: tempUserInfo.id,
          name: tempUserInfo.name,
        },
        process.env.JWT_KEY,
        {
          algorithm: "HS256",
          expiresIn: "30m",
          issuer: "jjh",
        }
      )
    );
    next();
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  const tempBoard = await Board.findAll({
    // attributes << 찾아보기. 공부
    order: [["id", "DESC"]],
    limit: 5, // 최대 개수
    offset: 3, // 시작 위치
  });
  res.send({ list: tempBoard });
});

router.post("/add", async (req, res) => {
  const tempUser = await User.findOne({
    where: {
      id: global.userId,
    },
  });
  const tempBoard = await Board.create(req.body);
  tempUser.addBoard(tempBoard);
  res.end();
});

router.put("/update", async (req, res) => {
  //UPDATE TableName SET text=${req.body.text} WHERE id =${req.body.id}
  await Board.update(
    //업데이트

    {
      text: req.body.text,
      //어떤 컬럼에 어떤 값으로
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.end();
});
router.delete("/delete", async (req, res) => {
  const tempBoard = await Board.findOne({
    where: {
      id: req.query.id,
    },
  });
  if (tempBoard.user_id === global.userId) {
    await Board.destroy({
      where: {
        id: req.query.id,
      },
    });
  }
  res.end();
});

module.exports = router;
