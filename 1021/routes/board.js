const router = require("express").Router();

router.get("/", (req, res) => {
  // 응답을 보내는 메소드 : 목록과 페이징(현재 몇번째 페이지인지, 총 페이지는 몇개인지)
  // axios.get("/api/board")
  console.log(req.route);
  res.send(req.route + "get 으로 받았다.");
});

router.post("/add", (req, res) => {
  // 추가하는 메소드
  //   게시판에 글 추가
  // axios.post("/api/board/add")
  //   console.log(req.route);

  res.send(req.route + "post로 받았다.");
});

module.exports = router;
