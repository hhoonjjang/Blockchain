import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LogBtn } from "../setting";
import Display from "./Display";
export default function Log() {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  let [LoginName, setLoginName] = useState("");
  const regist = () => {
    console.log(userId);
    console.log(userPw);
    setUserInfo([...userInfo, { userId, userPw }]);
    setId("");
    setPw("");
    console.log(userInfo);
  };
  const login = () => {
    console.log(userInfo);
    console.log(userInfo.map((item) => item.userId));
  };
  return (
    <div>
      <input
        type="text"
        value={userId}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
      ></input>
      <input
        type="password"
        value={userPw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="Password"
      ></input>
      <LogBtn onClick={regist}>회원가입</LogBtn>
      <LogBtn
        onClick={() => {
          console.log(userInfo);
          LoginName = userInfo.find(
            (item) => item.userId === userId && item.userPw === userPw
          );
          setLoginName(LoginName.userId);
        }}
        className={LoginName ? "off" : "on"}
      >
        로그인
      </LogBtn>
      <LogBtn
        onClick={() => {
          setLoginName("");
        }}
      >
        로그아웃
      </LogBtn>

      <Display text={LoginName ? `${LoginName}님 환영합니다!` : ""}></Display>
    </div>
  );
}
