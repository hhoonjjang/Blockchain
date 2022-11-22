import "./App.css";
import { useState } from "react";
import ToDoListBoard from "./components/ToDoListBoard";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const addItem = () => {
    console.log("hi", inputValue);
    setToDoList([...toDoList, inputValue]);
    console.log(toDoList);
  };
  return (
    <div className="App">
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button onClick={addItem}>추가하기</button>
      <ToDoListBoard setItem={setToDoList} item={toDoList} />
    </div>
  );
}

export default App;
