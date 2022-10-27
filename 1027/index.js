const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

// const db = require("./models");
// const { sequelize } = require("./models");
const db = require("./models/index.js");

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

db.sequelize
  .sync({ force: true }) // DB서버와 연결한다, force는 설정된 테이블을 강제로 생성한다.
  // force는 우리가 express 서버에서 설정한 테이블 데이터와 실제 DB 서버의 테이블 데이터가 다를 경우에
  // 서버의 테이블을 새로 생성하기 위해 사용한다.
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// 테이블의 데이터 추가//
//INSERT INTO `testing`.`testingnew_table` SET `idx` = `1`, `name` = 'naestbesabr' , `password` ='asrb',`id` = 'esarcv' , `create_at = '2022-02-10'

// db.NewTable.create({
//   idx: 12,
//   name: "asdsadsadsadsad",
//   pw: "dsadasd",
//   id: "dsadasdsadasd",
// });

// db.NewTable.findOne({
//   where: {
//     idx: 1,
//     name: "1",
//   },
// });

app.listen(app.get("port"), () => {
  console.log("서버열려따");
});
