import { useState } from "react";
import Regist from "../containers/Regist";

export default function RegistComp({ regist }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");
  const [userInfo, setUser] = useState([]);
  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="PassWord"
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="UserName"
        onInput={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          regist({ id: userId, pw: userPw, name: userName });
          //   setUser([...userInfo, { id: userId, pw: userPw, name: userName }]);
          //   console.log(userInfo);
        }}
      >
        회원가입
      </button>
    </div>
  );
}
