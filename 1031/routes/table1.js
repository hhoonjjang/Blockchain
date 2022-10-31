const router = require("express").Router();

const { Table1, Table2 } = require("../models/index.js");

// GET / POST / PUT / PATCH / DELETE
// 위 5가지 방식으로 통신을 하는 방식? 을 REST API 라고 한다.
//  REST API = RESTFUL API = RESTFUL
// HTTP 통신, 즉 Web 통신을 할 때 기본적으로 사용되는 방식이다.
// REST API VS GraphGL 도 있다.

// CRUD =>   sequelize (메소드) // mySQL (sql문)
// CREATE = > create / INSERT
// READ  = > finAll || findOne / SELECT
// UPDATE => update / UPDATE
// DELETE => destroy / DELETE

// rest api방식

router.get("/", (req, res, next) => {
  //   const { body, query } = req;
  res.cookie("middle", "testing", { expires: new Date(Date.now() + 1000 * 1) });
  next();
});
//요 위가 미들 웨어다.

router.get("/", async (req, res) => {
  const { body, query } = req; // 구조 분해할당
  const options = {
    include: [
      {
        model: Table2,
        as: "Table2s",
      },
    ],
  };
  if (query.column2) {
    options.where = {
      // 어떤 조건으로 찾을거냐?
      column2: query.column2, // column2가 query.column2인 애를 찾겠다.
    };
  }
  const tempTables = await Table1.findAll(options);
  //   const tempTables = await Table1.findAll({
  //     where: {
  //       column2: query.column2,
  //     },
  //   });

  //   Table1.findOne();
  console.log(body);
  res.send({ name: "get", body, query, tempTables });
});

router.post("/", async (req, res) => {
  const { body, query } = req; // 구조 분해할당

  const tempTable = await Table1.create({
    column1: body.column1,
  });
  console.log(body);
  res.send({ name: "post", body, query, tempTable });
});

router.put("/", async (req, res) => {
  // 수정 시 전부 수정을 요청할때
  const { body, query } = req; // 구조 분해할당
  const tempTable = await Table1.update(
    {
      column1: body.column1,
      //  수정할 정보를 입력한다.
    },

    {
      where: {
        column2: body.column2,
      },
    }
  );
  console.log(body);
  res.send({ name: "put", body, query, tempTable });
});
router.patch("/", (req, res) => {
  // 수정 시 일부분 수정을 요청할때
  const { body, query } = req; // 구조 분해할당
  console.log(body);
  res.send({ name: "patch", body, query });
});
router.delete("/", async (req, res) => {
  const { body, query } = req; // 구조 분해할당
  const tempTable = await Table1.destroy({
    where: {
      column1: query.column1,
    },
  });
  res.send({ name: "delete", body, query, tempTable });
});

// router.use('/user')
// router.get('/')
// router.post('/user')
// router.put('/user')
// router.patch('/user')
// router.delete('/user')

// router
//   .route("/")
//   .get((req, res) => {
//     res.end();
//   })
//   .post((req, res) => {
//     res.end();
//   })
//   .put((req, res) => {
//     res.end();
//   })
//   .patch((req, res) => {
//     res.end();
//   })
//   .delete((req, res) => {
//     res.end();
//   });

module.exports = router;
