// @reduxjs/toolkit이란
// redux toolkit라고 부르며 redux라이브러리의 업데이트 버전, 새로운 버전
// - createStroe가 deprecated된 원인.

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./modules/store";
import { store } from "./modules/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// react에서 로딩창을 구현할때
// 스니퍼라고하는 형태로 많이 구현한다. << 해당 혈태는 원이 빙글빙글 도는 애니메이션
// -react에서 스니퍼 또는 로딩창 구현시 suspense / lazy 정도를 사용한다.
