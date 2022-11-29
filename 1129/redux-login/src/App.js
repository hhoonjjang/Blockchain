import logo from "./logo.svg";
import "./App.css";
import Login from "./containers/Login";
import Regist from "./containers/Regist";
import Logout from "./containers/Logout";
function App() {
  return (
    <div className="App">
      <Login></Login>
      <Regist></Regist>
      <Logout></Logout>
    </div>
  );
}

export default App;
