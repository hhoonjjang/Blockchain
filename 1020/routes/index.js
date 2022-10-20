import { Router } from "express";

const router = Router();
const todoList = [];
router
  .route("/")
  .get((req, res) => {
    res.send({
      list: todoList,
    });
  })
  .post((req, res) => {
    todoList.push({
      text: req.body["name"],
      time: req.body.time,
    });
    // todoList.push(
    //   req.body["name"] + "<등록시간>" + req.body.time + "index:" + req.body.id
    // );

    res.end();
  })
  .delete((req, res) => {
    console.log(todoList);
    todoList.splice(req.query.id, 1);
  })
  .put((req, res) => {
    console.log(req.query.name1);
    console.log(req.query.id);

    todoList.splice(req.query.id, 1, req.query.name1);
    // todoList.map(req.query.name);
    // todoList.push(req.query.value);
  });

//   .delete((req, res) => {})
//   .put((req, res) => {});
export default router;
// module.exports = router
