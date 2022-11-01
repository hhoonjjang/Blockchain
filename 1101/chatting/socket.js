const socket = require("socket.io");
const jwt = require("jsonwebtoken");

module.exports = (server) => {
  const io = socket(server);
  io.on("connection", (ws) => {
    ws.on("hi", (data) => {
      ws.data = data;
      //   console.log(ws);
      console.log(data);
      console.log(data.cookie);

      console.log(ws.handshake.headers.cookie);
      if (!data.cookie) {
        ws.emit("abc", "로그인하고 쓰세요");
        // console.log(ws.handshake.headers.cookie);
        return;
      }

      ws.emit("1234");

      //   ws.broadcast.emit("message1", "헤이");
    });
    ws.on("disconnect", () => {
      console.log("disconnection");
      io.emit("disconnect1", "하이");
    });

    ws.on("12345", (data) => {
      const verifiedId = jwt.verify(
        data.cookie.split("=")[1],
        process.env.JWT_KEY
      ).name;
      console.log(
        "hi",
        jwt.verify(data.cookie.split("=")[1], process.env.JWT_KEY)
      );
      let tempid;
      tempid = data.name;
      console.log(tempid);
      console.log(verifiedId, tempid);

      if (tempid == verifiedId) {
        console.log(data);
        io.emit("message1", data);
      }
      // else {
      //   ws.emit("abc", "로그인하고 쓰세요");
      //   return;
      // }
    });
  });
};
//   if (!ws.handshake.headers.cookie) {
//   ws.emit("abc", "로그인하고 쓰세요");
//   console.log(ws.handshake.headers.cookie);
//   return;
//   }
