import store from "../store";
import { useState } from "react";
export default function LogComp({ login }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
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
        type="password"
        placeholder="Password"
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let id = store
            .getState()
            .array.find((item) => item.userInfo.id == userId);
          login(id);
          console.log(id);
        }}
      >
        로그인
      </button>
    </div>
  );
}
