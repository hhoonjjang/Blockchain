import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(
  // store를 생성한다.
  reducer,
  //첫번째 매개변수로 reducer를 전달한다.
  { a: 0 }, //두번째 매개 변수로 초기상태를 전달한다. initialize/ initializeState
  composeWithDevTools() //옵션으로 devtool에 연결한다.
);

export default store;
