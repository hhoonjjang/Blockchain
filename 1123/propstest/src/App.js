import React from "react";
import { useState } from "react";
function App() {
  const [color, setColor] = useState(0);
  let [num, setNum] = useState(0);
  const increase = () => {
    setNum(num + 1);
    console.log(num);
  };

  return (
    <div className="App" onClick={increase}>
      <ChildComp text="string" num={num} color={color} />
      <ChildFunc text="string" num={num} color={color} setColor={setColor} />
    </div>
  );
}

export default App;

class ChildComp extends React.Component {
  constructor(props) {
    // props란 부모 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다. <<재정의를 하지 않는다.
    super(props);
    // 클래스형 컴포넌트에서는 constructor(생성자)에서 매개변수로 받아
    // 상속 클래스 (React.Component)의 constructor(super)를 호출한다.
    // 이후 this.props를 사용하여 호출할 수 있다.
    console.log(this.props);
    // this.props.color
    console.log(this.props.num);
    console.log(this.props.setColor);
  }
  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {this.props.num}
      </div>
    );
  }
}
function ChildFunc(props) {
  // 함수형 컴포넌트에서는 매개변수로 바로 받는다.
  // {} 를 사용하여 구조 분해 할당을 할 수 있다.
  // function ChildFunc({})
  // const {} = props << 와 같다.
  console.log(props);
  // props.setColor
  const changeColor = () => {
    props.setColor((state) => {
      console.log(state);
      return state + 100;
    });
    // props.setColor(props.color + 100);
    // props의 setColor 메서드를 호출한다.
    // state란?
    // setState(변경할 값)
    // setState((state)=>{    <<여기서 state는 기존값
    // return 변경할값 리턴
    // })
    // setState((state)=>newState)
  };
  return <div onClick={changeColor}>{props.num}</div>;
}
