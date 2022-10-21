// 암호화
// 입력한 데이터를 다른 사람이 알 수 없도록 변환한다.

// 1234=> 암호화를 통해서 => asdijaskld
// 복호화: 암호화된 데이터를 원상 복구한다.
// daklsdmkals =>복호화=>1234
// 사용자가 입력한 데이터를 알 수 있어야 할까?
// 알면 안되는 것도 있다. => 단방향/양방향 암호화
// 단방향은 암호화만 가능하다 => 복호화가 불가능하다.
// 양방향은 복호화가 가능하다.

const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");
const { parse } = require("path");

// const routes = require("./routes/index.js");

const boardList = [];

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "web")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "cookie-session",
  })
);

app.post("/api/board/add", (req, res) => {
  boardList.unshift(req.body);
  res.send({ status: 200, data: "정상입력완료" });
});

app.post("/api/board/delete", (req, res) => {
  console.log(req.body);
  boardList.splice(+req.body.count * 5 + +req.body.num, 1);
  res.send({ status: 200, data: "delete" });
});
app.post("/api/board/update", (req, res) => {
  boardList[+req.body.count * 5 + +req.body.num].text = req.body.text;
  boardList[+req.body.count * 5 + +req.body.num].uptime = req.body.time;
  res.send({ status: 200, data: "update" });
});

// app.get("/api/board", (req, res) => {});

app.get("/api/board", (req, res) => {
  console.log(req.query.count);
  res.send({
    status: 200,
    list: boardList.slice(+req.query.count * 5, (+req.query.count + 1) * 5),
    maxCount:
      parseInt(
        (boardList.length ? boardList.length - 1 : boardList.length) / 5
      ) + 1,
  });
});

// app.use("/", (req, res, next) => {
//   console.log("url1: " + req.url);
//   next();
// });

// app.use("/api", (req, res, next) => {
//   console.log("url2: " + req.url);
//   next();
// });
// app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log("서버를 열어따");
});
