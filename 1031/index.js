const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const db = require("./models/index.js");
const routes = require("./routes/index.js");

dotenv.config();

const app = express();

app.set("port", process.env.Port || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extend: false }));

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
    name: "seed",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/hi", routes);
// localhost:8080/hi >> routes에 접근한다.

app.listen(app.get("port"), () => {
  console.log("서버열려따열려쒀 너무 잘 열려쒀");
});
