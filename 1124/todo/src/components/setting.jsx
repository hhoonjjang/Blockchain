import styled from "styled-components";

//default는 파일 하나당 하나만 가능하다.
// default를 쓰지 않으면 {} 를 사용해 구조분해할당 형식으로 가져와야한다.
// export는 여러개를 내보낼 수 있다.

export const LogBtn = styled.div`
  display: inline-block;
  border-radius: 5px;
  border: 1px solid yellow;
  padding: 5px 5px;
  cursor: pointer;
  margin: 5px;

  &.on {
    display: block;
  }
  &.off {
    display: none;
  }
`;

export const TodoBtn = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &.todo {
    color: gray;
    border-color: gray;
  }
  &.todo1 {
    color: gray;
    border-color: gray;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.in-progress {
    color: orange;
    border-color: orange;
  }
  &.complete {
    color: green;
    border-color: green;
  }

  &.sky {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }

  &.sky1 {
    border-color: #0dcaf0;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.on {
    color: black;
    &.todo {
      background-color: gray;
    }
    &.in-progress {
      background-color: orange;
    }
    &.complete {
      background-color: green;
    }
  }
`;
export const STATUS = {
  ToDo: 0,
  InProgress: 1,
  Complete: 2,
};
export const STATUSLIST = ["ToDo", "In Progress", "Complete"];
