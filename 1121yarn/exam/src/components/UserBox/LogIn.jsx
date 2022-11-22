import { useState, useEffect } from "react";
import styled from "styled-components";

export default function LogIn({ users, setUser }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbledId] = useState(false);
  const [ablePw, setAbledPw] = useState(false);

  useEffect(() => {
    // console.log(userId);
    setId(userId.length > 0 ? userId.match(/[a-z]/gi).join("") : "");
    if (userId[userId.length] < 5) {
      setAbledId(false);
    } else {
      setAbledId(true);
    }
  }, [userId]);

  useEffect(() => {
    if (userPw[userPw.length] < 10) {
      setAbledPw(false);
    } else {
      setAbledPw(true);
    }
  }, [userPw]);
  function onLogIn() {
    const tempUser = users.find((item) => item.userId === userId);
    if (tempUser && tempUser.userPw === userPw) setUser(tempUser.userId);
  }

  return (
    <LogInBox>
      <input
        type={"text"}
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
        value={userId}
      />
      <input
        type={"password"}
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="PW"
        value={userPw}
      />
      <button
        onClick={() => {
          if (!(ableId && ablePw)) return;
          onLogIn();
        }}
      >
        LogIn
      </button>
    </LogInBox>
  );
}

const LogInBox = styled.div``;
