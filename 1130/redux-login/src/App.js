import logo from "./logo.svg";
import "./App.css";
import UserComponet from "./components/User";
import BoardComponent from "./components/Board";
import FreeBoard from "./components/FreeBoard";
function App() {
  return (
    <div>
      <UserComponet />
      {/* <BoardComponent /> */}
      <FreeBoard />
    </div>
  );
}

export default App;
