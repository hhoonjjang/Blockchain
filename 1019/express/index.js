const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));

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

// http://localhost:8080/testing?lunch=dasdsad
// http:// => 프로토콜  어떤형식,규칙을 사용할것인가?
// localhost => 주소 , IP 주소/도메인(DNS) 주소
// :8080 => 포트번호
// /testing => 라우터
// ?lunch=dasdsad => 쿼리

//q=mlkmklmk&oq=mlkmklmk
//aqs=chrome..69i57j46i13i19i512l2j0i13i19i512l6.4023j0j7
//sourceid=chrome
//ie=UTF-8

// app.get("/testing", (req, res)
// app.post("/testing", (req, res)
app.post("/testing", (req, res) => {
  console.log(req.body);
  res.end(`<div>${req.query.lunch}</div>`);
  //   get 메소드 형식을 사용할 때는 query, 즉 쿼리스트링을 사용한다.
  // post 메소드 형식을 사용할 때는 body로 데이터에 접근한다.
  // use는 메소드형식에 상관없이 돈다. 라우터(/testing)을 보통 사용하지않는다.
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
});

app.listen(app.get("port"), () => {
  console.log(`포트 번호 ${app.get("port")}로 접속 ㄱ`);
});
