import logo from "./logo.svg"; // 이미지를 불러온다.
import "./App.css"; // CSS 파일을 불러온다.
import Test from "./Test";
import Box from "./Box";
function App() {
  // 파스칼 표기법을 사용한다. << Component 이다. (이후 설명 예정)
  return (
    <div className="App">
      <div className="box">Box1 jjh</div>
      <Box name="재" num="1"></Box>
      <Box name="훈" num="2"></Box>
      <Box name="이" num="3"></Box>
      <Box name="얌" num="4"></Box>

      <Test test1="테스트중입니다." idx="1">
        안녕하세요{" "}
      </Test>
      <Test test1="테스트중입니다." idx="2">
        안녕하세요{" "}
      </Test>

      {/* Component의 예시이다. */}
      {/* react에서는 class가 아닌 className 이라고 한다. */}
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
