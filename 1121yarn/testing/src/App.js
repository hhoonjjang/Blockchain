import logo from "./logo.svg";
import "./App.css";
import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";
import Additional from "./components/Additional";

function App() {
  return (
    <div className="App">
      <ClassComp
        text={"testing ClassComp"}
        func={() => {
          console.log("testingClassCom");
        }}
      />

      <FuncComp
        text={"testing FuncComp"}
        func={() => {
          console.log("testingFuncComp");
        }}
      />
      <Additional />
    </div>
  );
}

export default App;
