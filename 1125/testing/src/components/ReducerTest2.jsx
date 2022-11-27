// useReducer를 왜하는가 << feat. 라뗴는없댜
// <써본기억이없지만 Redux의 기초에 도움이 된다.
//  state/action/dispatch/reducer
// action:요청한다. 어떤일을 해달라고 할지 내용과 데이터를 가진 변수이다.
// 목적(type), 목적에필요한 자료(데이터)(payload)
// dispatch : 요청을 받아서 일할 reducer에게 전달하는 함수이다.
// setState -> state에 적용한다.
// dispatch -> reducer가 해당 내용을 가지고 작업을 한 후 state에 적용한다.
// 중간과정이 추가된다. 로직을 넣을 수 있으며 입력한 데이터와 전혀 다른 데이터를
// state에 정의 할 수 있따.
// reducer: dispatch가 전달한 데이터로 작업을 진행한 후 결과를 state에 정의한다.

import { useReducer } from "react";
import { useState } from "react";
import { reducer } from "./reducerTest";
export default function ReducerTest2() {
  const [count, setCount] = useState(0);
  const [count2, count2Dispatch] = useReducer(reducer, 0);
  const plus = () => {
    const tempCount = count + 1;
    setCount(tempCount);
  };

  const minus = () => {
    const tempCount = count - 1;

    setCount(tempCount);
  };

  const divide = () => {
    const tempCount = count / 10;

    setCount(tempCount);
  };
  const multi = () => {
    const tempCount = count * 10;

    setCount(tempCount);
  };
  return (
    <>
      <div>
        count :{count}
        <div onClick={plus}>+ </div>
        <div onClick={minus}>- </div>
        <div onClick={multi}>* </div>
        <div onClick={divide}>/ </div>
      </div>
      <div>
        count :{count2}
        <div
          onClick={() => {
            count2Dispatch({ type: "plus" });
          }}
        >
          +{" "}
        </div>
        <div
          onClick={() => {
            count2Dispatch({ type: "minus" });
          }}
        >
          -{" "}
        </div>
        <div
          onClick={() => {
            count2Dispatch({ type: "divide" });
          }}
        >
          *{" "}
        </div>
        <div
          onClick={() => {
            count2Dispatch({ type: "multiple" });
          }}
        >
          /{" "}
        </div>
      </div>
    </>
  );
}
