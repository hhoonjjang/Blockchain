import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import { useState } from "react";
import Log from "./components/Log";
import In from "./components/Log/In";
import Out from "./components/Log/Out";
function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* router를 나누기 위해서는 Routes 컴포넌트로 묶어야한다. */}
        <Route path="" element={<Home propsNum={num} />} />
        {/* "/"는 절대경로 // ""는 상대경로 */}
        {/* Route는 각 라우터에 대한 구현이다. path 는 라우터의 주소, element는 출력할 element(컴포넌트포함) */}
        <Route path="login" element={<LogIn />} />
        <Route path="log/*" element={<Log />}>
          <Route path="in" element={<In />}></Route>
          <Route path="out" element={<Out />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
