import store from "../store";
import { useState } from "react";
export default function LogoutComp() {
  const [userName, setName] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          console.log(store.getState().id.userInfo.name);
          setName(store.getState().id.userInfo.name);
        }}
      >
        로그아웃
      </button>
      <div>{userName == "" ? "로그인해주세요" : `${userName}님어서오세요`}</div>
    </div>
  );
}
