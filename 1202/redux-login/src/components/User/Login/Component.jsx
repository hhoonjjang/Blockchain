import styled from "styled-components";
import { useState } from "react";
const LoginComponent = ({ onClick }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  return (
    <LoginBox>
      <input
        type="text"
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
      />
      <input
        type="password"
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="Password"
      />
      <button onClick={() => onClick(userId, userPw)}>로그인</button>
    </LoginBox>
  );
};

export default LoginComponent;

const LoginBox = styled.div`
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
