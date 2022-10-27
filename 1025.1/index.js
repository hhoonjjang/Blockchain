const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const axios = require("axios");
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
    name: "session",
  })
);

//쿠키 : 브라우저에서 데이터를 임시 저장하는 곳 << 형식은 무조건 string
//세션 : 서버에서 데이터를 임시 저장하는 곳 << 형식은 무조건 string
//"{statue:200,data:{dasdasdasdad}}"
// cache: 캐시 : 이미지와 영상을 저장하는 곳 << 형식은 파일
//

app.post("/", (req, res) => {
  //   console.log(req.body);
  //   res.end("end");
  //   res.send(req.body);
  res.json(req.query);
  res.json({ ...req.query, ...req.body });
});

app.get("/api", (req, res) => {
  //   res.send(req.query);
  res.json(req.query);
});

app.get("/testing", (req, res) => {
  res.send(`<html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>테스팅</title>
    </head>
    <body>
    <div>테스트중입니다.</div>
    <h1>테스트중입니다.</h1>
    <h2>테스트중입니다.</h2>
    <h3>테스트중입니다.</h3>
    <h4>테스트중입니다.</h4>
    <h5>테스트중입니다.</h5>
    <h6>테스트중입니다.</h6>
    </body>
  </html>
  `);
});

app.get("/testing1", (req, res) => {
  res.send(`
      <div>테스트중입니다.</div>
      <h1>테스트중입니다.</h1>
      <h2>테스트중입니다.</h2>
      <h3>테스트중입니다.</h3>
      <h4>테스트중입니다.</h4>
      <h5>테스트중입니다.</h5>
      <h6>테스트중입니다.</h6>
    `);
});

app.get("/search", async (req, res) => {
  const data = (await axios.get("http://localhost:8080")).data;
  //   const data = await axios.get("http://localhost:8080");

  res.send(data);
});

app.get("/search/query", async (req, res) => {
  const data = await axios.post("http://localhost:8080", req.query);
  console.log(req.query);
  console.log(typeof req.query);
  res.send(data.data);
});

app.get("/watch", (req, res) => {
  res.send("해킹하지마");
});

app.listen(app.get("port"), () => {
  console.log("서버열려따.");
});
