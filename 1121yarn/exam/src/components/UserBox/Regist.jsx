import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Regist({ users, setUsers }) {
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
      //  ID길이에 대한 예외처리
    }
  }, [userId]);

  useEffect(() => {
    if (userPw[userPw.length] < 10) {
      setAbledPw(false);
    } else {
      setAbledPw(true);
      //  ID길이에 대한 예외처리
    }
  }, [userPw]);

  function onRegist() {
    if (users.find((item) => item.userId === userId)) return;
    setUsers([...users, { userId, userPw }]);

    // setUsers(state=>([...state,{userId,userPw}]);
    // users.push({userId,userPw});  //적용은 되나 절대적으로 권장하지않는 방식이다.
    // setUsers(users)
    // setUsers(users.concat([{userId,userPw}]))
  }

  return (
    <RegistBox>
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
          onRegist();
        }}
      >
        Regist
      </button>
    </RegistBox>
  );
}

const RegistBox = styled.div``;
