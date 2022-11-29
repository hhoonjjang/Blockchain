import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { useState, setState } from "react";
import EditInput from "./reducer/EditInput";
import { Link, Routes, Route } from "react-router-dom";
function App() {
  // let a;
  const [input, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [a, setA] = useState(1);
  const [edit, setEdit] = useState("");
  const [_, setRender] = useState(false);

  //  _ 란 보통 사용하지 않을 변수의 이름으로 설정한다. 일종의 관례
  //  _ 라는 라이브러리도 있으니 주의사항이다(lowbar).
  return (
    <div className="App">
      <div>{store.getState().count1}</div>
      {/* store.getState() 는 store를 가져온다. */}
      {/* stroe.getState()로 받아온 store의 객체는 React의 랜더링에 관여하지않는다. */}
      {/* 그래서 Class 컴포넌트에서는 forceupdate()를 사용해서 강제로 랜더링을 해준다. */}
      {/* function 컴포넌트에서는 state를 하나 만들어서 setState를 통해 랜더링을 강제한다. */}

      <div>{store.getState().count2}</div>

      <input
        type="number"
        onInput={(e) => {
          console.log(e.target.value);
          setCount(e.target.value);
        }}
        placeholder="number"
      ></input>
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/Plus",
            payload: { input: input },
          });
          setA(-a);
          // setRender((state) => !state);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/Minus",
            payload: { input: input },
          });
          setA(-a);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/Plus",
            payload: { input: input },
          });
          setA(-a);
        }}
      >
        2+
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/Minus",
            payload: { input: input },
          });
          setA(-a);
        }}
      >
        2 -
      </button>
      <br></br>
      <input
        onInput={(e) => {
          console.log(e.target.value);
          setArray((item) => {
            console.log(item);
            return e.target.value;
          });
        }}
      ></input>
      <button
        onClick={() => {
          setA(-a);
          store.dispatch({ type: "add", payload: { array } });
        }}
      >
        추가
      </button>

      <button
        onClick={() => {
          setA(-a);

          store.dispatch({ type: "remove", payload: { array } });
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          setA(-a);
          store.dispatch({ type: "selectRemove", payload: { array } });
        }}
      >
        선택삭제
      </button>
      <br />
      <input
        type="text"
        onInput={(e) => {
          setEdit(e.target.value);
        }}
        placeholder="수정내용"
      ></input>
      <button
        onClick={() => {
          setA(-a);
          store.dispatch({ type: "edit", payload: { array, edit } });
        }}
      >
        수정
      </button>
      <div>
        {store.getState().array.map((item, index) => (
          <div key={`${index}`}>
            {item}
            <Link to={"edit" + `?value=${index}`}>
              <button
                key={`edit-${index}`}
                onClick={() => {
                  setA(-a);
                  store.dispatch({ type: "edit1", payload: { index } });
                }}
              >
                수정
              </button>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path={"edit"} element={<EditInput></EditInput>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
