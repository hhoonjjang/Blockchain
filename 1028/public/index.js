async function getList() {
  try {
    const result = (await axios.get("/api/board")).data;
    boardList.innerHTML = "";

    result?.list?.forEach((item) => {
      console.log(item);
      const boardItem = document.createElement("div");
      //     `<div class="board-item">
      const boardTitle = document.createElement("div");
      // <div class="board-title"></div>
      const boardText = document.createElement("div");
      //       <div class="board-text"></div>
      const boardBtnBox = document.createElement("div");
      //       <div class="board-btn-box">
      const boardDelete = document.createElement("button");
      //         <button class="board-delete">board-delete</button>
      const boardUpdate = document.createElement("button");
      //         <button class="board-update">board-update</button>
      const formCommentAdd = document.createElement("form");
      //       </div>
      //       <form id="comment-add">
      //         <input id="comment-text" type="text" placeholder="Text"/>
      //       </form>
      const formCommentText = document.createElement("input");
      const formCommentAddbtn = document.createElement("button");
      //         <div class="commnet-add-btn-box">
      const commentList = document.createElement("div");
      //         <div class="commnet-list"></div>
      const commentText = document.createElement("div");
      // <div class = "comment-text"></div>
      const commentBtnBox = document.createElement("div");
      // <div class ="comment-btn-box"
      const commentDelete = document.createElement("button");
      //           <button class="commnet-delete">comment-delete</button>

      const commentUpdate = document.createElement("button");
      //           <button class="commnet-update">comment-update</button>
      //       </div>
      //     </div>
      //   </div>`
      boardTitle.innerText = item.title;
      boardText.innerText = item.text;

      boardDelete.innerText = "Delete";
      boardDelete.onclick = async function () {
        try {
          await axios.delete("/api/board/delete?id=" + item.id);
          getList();
        } catch (error) {
          console.log(error);
        }
      };

      boardUpdate.innerText = "Update";
      boardUpdate.onclick = async function () {
        try {
          await axios.put("/api/board/update", {
            id: item.id,
            text: item.text + "update/",
          });
          getList();
        } catch (error) {
          console.log(error);
        }
      };

      boardItem.append(boardTitle);
      boardItem.append(boardText);
      boardItem.append(boardBtnBox);
      boardBtnBox.append(boardDelete);
      boardBtnBox.append(boardUpdate);
      boardItem.append(formCommentAdd);
      formCommentAdd.append(formCommentText);
      formCommentAdd.append(formCommentAddbtn);
      boardItem.append(commentList);
      commentList.append(commentText);
      commentList.append(commentBtnBox);
      commentBtnBox.append(commentDelete);
      commentBtnBox.append(commentUpdate);
      boardList.append(boardItem);
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
}
getList();

document.forms["sign-up"].onsubmit = async function (e) {
  e.preventDefault();
  if (
    !e.target["user-id"].value ||
    !e.target["user-pw"].value ||
    !e.target["user-name"].value ||
    !e.target["user-class"].value
  )
    return;
  try {
    const result = await axios.post("/api/user/regist", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
      name: e.target["user-name"].value,
      className: e.target["user-class"].value,
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
};
document.forms["sign-in"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["user-id"].value || !e.target["user-pw"].value) return;
  try {
    const result = await axios.post("/api/user/login", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
    });
    console.log(result);
    console.log(result.data);
    getList();
  } catch (error) {
    console.error(error.response.data.message);
  }
};

document.getElementById("sign-out-btn").onclick = async function (e) {
  try {
    await axios.get("/api/user/logout");
    getList();
  } catch (error) {
    console.error(error.response.data.message);
  }
};

const boardList = document.getElementById("board-list");

document.forms["board-add"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value || !e.target["board-text"].value) return;
  try {
    const result = await axios.post("/api/board/add", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
    });

    getList();
  } catch (error) {
    console.error(error.response.data.message);
  }
};
