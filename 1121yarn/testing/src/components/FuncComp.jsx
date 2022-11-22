// export default function FuncComp(props) {
//   props.func();
//   return <div>FuncComp{props.text}</div>;
// }

import { useState, useEffect } from "react";

export default function FuncComp({ text, func }) {
  // 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을 사용하기 위해 사용하는 것을 Hook이라고 한다.
  // Hook은 user로 시작한다.
  //  useState,userEffect, useCallback,useMemo,userRef,useContext,useReducer 등등이 있다.
  // Hook은 사용자가 구현할 수도 있다 (커스텀훅)
  // -Custom Hook과 Compoent\\의 차이=>HTML 문법으로  return 하는가 안하는가?
  // useState와 useEFfect 는 뺄 쑤 없는 Hook이다 . 단, 나머지는 사용하지않아도 크게
  // 상관없다.

  const [test, setTest] = useState("state test"); //state선언 및 정의(초기화)
  // state: 상태값, React에서의 리랜더링(다시 그리기) 의 기준이 된다.
  //state가 변경 (재정의)되면 컴포넌트를 다시 불러온다
  //    단, 다시 불러올 때 Hook으로 된 변수, 함수들은 다시 부르지 않는다.(useState 등등)
  //useState는 함수형 컴포넌트의 투톱 중 하나다.
  const [test1] = useState("state test1");
  func();

  useEffect(() => {
    // useEffect는 랜더링 후에 실행되는 콜백함수이다.
    console.log("useEffect");
  }, []);

  useEffect(() => {
    console.log("state change");
  });

  useEffect(() => {
    console.log("test change");
    // state 중 test 값이 변화했을 때 실행되는 메소드
  }, [test]);
  useEffect(() => {
    console.log("test1 change");
    // state 중 test1 값이 변화했을 때 실행되는 메소드
  }, [test1]);
  //   두번쨰 매개변수 배열의 아이템으로 프로그래머가 감지하고 싶은 state(상태값)을 넣는다.
  // study1이 변경(재정의) 됐을 때만 실행된다.
  // useEffect의 두번째 매개변수는 state 값의 배열을 넣는다.
  //빈배열의 경우 componentDidMount와 같은 역할을 한다.
  //   즉, 마운트 됐을 때만 실행한다.
  // useEffect는 함수형 컴포넌트의 투톱 중 하나다.

  useEffect(() => {
    console.log("test || test1 change");
  }, [test, test1]);

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return (
    <div
      onClick={function () {
        setTest(test1 + "1"); //state 재정의
      }}
    >
      FuncComp {text}
      {test}
      {test1}
    </div>
  );
}
