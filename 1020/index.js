import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
// url -> 주소,라우터 , 서버내에서의 파일 위치 등등, 관리하는 내장모듈

import listApi from "./routes/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const todoList = [];

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.json());
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("combined")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));
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

app.use("/api/list", listApi);

// app.get("/api/list", (req, res) => {
//   res.send({
//     list: todoList,
//   });
// });

// app.get("/api/add", (req, res) => {
//   console.log(req.query);
//   todoList.push(req.query.name);
//   console.log(todoList);
//   res.end();
// });

// app.post("/api/add", (req, res) => {
//   // post형식으로 요청을 받을때
//   // (첫번쨰 매개변수, 두번째 매개변수)
//   // 첫번쨰 매개변수는 라우터, 즉 주소의 뒤에 어떻게 붙어서 요청이 들어왔는가??
//   // 2번째 매개변수는 콜백 함수이며 해당 post 요청에 대해서 실행하는 작업코드
//   // console.log(req.body);
//   todoList.push(req.body["name"] + "<등록시간>" + req.body.time);
//   //todoList.push(text:req.body["name"],time:req.body.time)
//   // req, 즉 요청에 body안에 있는 do-name을 todolist에 추가한다.
//   console.log(todoList);
//   res.end();
//   // res, 즉 응답으로 todoList를 보내고 완료한다.
// });

app.listen(app.get("port"), () => {
  console.log("서버열어따");
});
