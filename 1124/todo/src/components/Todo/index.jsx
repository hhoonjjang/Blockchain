import { Link } from "react-router-dom";
import styled from "styled-components";
import { TodoBtn } from "../setting";
import List from "./List";
import TodoModel from "./TodoModel";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
//export 시 default를 쓰지 않으면 {} 를 사용해 구조분해할당 형식으로 가져와야한다.

export default function Todo() {
  const [list, setList] = useState([
    { taskName: "하잇", status: 0 },
    { taskName: "하잇", status: 1 },
    { taskName: "하잇", status: 2 },
  ]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoModelBtnBox>
        <Link to={"add"}>
          <TodoBtn className="sky">Add Task</TodoBtn>
        </Link>
      </TodoModelBtnBox>
      <List list={list} setList={setList} />
      <Routes>
        <Route
          path={"add"}
          element={<TodoModel setList={setList} func={"Add"} />}
        ></Route>
        <Route
          path={"edit"}
          element={<TodoModel setList={setList} func={"Edit"} />}
        ></Route>
      </Routes>
    </div>
  );
}
const TodoModelBtnBox = styled.div`
  text-align: right;
`;
