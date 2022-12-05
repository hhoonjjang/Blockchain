// redux-thunk 는 무슨 역할을 하는가
// - 비동기 처리를 사용하기 위해서 미들웨어로 쓰인다.

import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { action } from "./modules/count";
import promiseTime from "./modules/promiseTime";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  // const increase = setTimeout(() => dispatch(action.increment()), 1000);
  // const decrease = setTimeout(() => dispatch(action.decrement()), 1000);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          // 1. 사용자가 클릭한다 클릭시 dispatch를 호출하며 action의 asyncIncrement 메소드를 호출한다. 해당 메소드는 함수를 반환(return)한다.
          console.log("1.CLick");
          dispatch(action.asyncIncrement());
        }}
      >
        thunk +
      </button>
      <button
        onClick={() => {
          dispatch(action.asyncDecrement());
        }}
      >
        thunk -
      </button>

      <button
        onClick={() => {
          promiseTime(action.increment(), 1000)
            .then((data) => {
              // then 메소드를 사용하여 매개변수로 콜백함수를 전달한다.
              // 전달된 콜백함수는 매개변수로 Promise의 resolve 결과를 받는다.
              // promiseTime.js의 6번째 줄에서 전달하는 type 매개변수를 여기서 data 매개변수로 받는다.
              dispatch(data);
            })
            .catch((error) => {});
          // dispatch(action.increment());
          // increase();
          // clearTimeout(increase);
        }}
      >
        Promise +
      </button>
      <button
        onClick={async () => {
          const temp = await promiseTime(action.decrement(), 1000);
          // const temp = dispatch(await promiseTime(action.decrement(),1000)) << 와 같이 작성하면 오류 발생한다.
          // dispatch에 전달하는 매개변수는 기본적으로는 객체 형식의 action만 가능하다.
          // action에서 비동기 처리를 할 수 있도록 중간 과정을 추가하는 것이 redux-thunk이다.

          // 1초간 기다린 후에 액션(temp)을 받아서
          // 중간 과정으로 Promise, axios 등을 처리 할 수 있도록 async, await를 사용할 수 있게 추가한다.
          dispatch(temp);
          // dispatch에 액션을 전달한다.

          // decrease();
          // clearTimeout(decrease);
        }}
      >
        promivse-
      </button>
    </div>
  );
}

export default App;
