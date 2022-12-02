import styled from "styled-components";
import { useState } from "react";

// 3. onClick을 부모 컴포넌트(RegistContainer) 로부터 props로 받는다.
const RegistComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");
  console.log("RegistComponent", onClick);
  return (
    <RegistBox>
      <input
        type={"text"}
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder={"ID"}
      />
      <input
        type={"password"}
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder={"Password"}
      />
      <input
        type={"text"}
        value={userName}
        onInput={(e) => {
          setName(e.target.value);
        }}
        placeholder={"Name"}
      />
      <button
        onClick={() => {
          console.log("button onClick");
          // 4. 사용자가 Regist 했을때 onClick함수를 호출한다.
          //  매개변수로 userId,userPw,userName을 전달한다.
          onClick(userId, userPw, userName);
        }}
      >
        회원가입
      </button>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  input {
    padding: 5px 10px;
    border-radius: 5px;
  }
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: black;
    color: yellow;
  }
`;
