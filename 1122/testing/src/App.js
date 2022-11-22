//Component란 ? << 기능적으로 최소 단위
// - 기능을 포함하는 HTML 구조 단위
// - 컴포넌트는 항상 HTML 구조를 return 해야한다.
// - 함수형에서는 함수 자체가 return한다.
//  - 클래스형에서는 render 메서드에서 return한다.
// 컴포넌트(root)
// -App
// -UserBox
// -Regist
// -LogIn
// -LogOut
// -BoardBox

//  여기가 버츄얼돔이다.  그래서 실제 돔에는 적용된다. UseState로 매긴다.
import "./App.css";
import React from "react";

function App() {
  let test = "테스팅";
  let num = 1;
  let bool = true;
  let str = "문자열";
  let arr = [1, 2, 3, 4];
  let obj = { name: "객체" }; // obj는 출력이 안된다.
  let nul = null;
  let und = undefined;
  let arrDiv = [
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>,
    <div key={4}>4</div>,
  ];

  function arrFunc(arr) {
    const tempArr = [];
    // for (let i = 0; i < arr.length; ++i) {
    //   tempArr.push(<div key={i}>{arr[i]}</div>);
    // }
    arr.forEach((item, index) => {
      tempArr.push(<div key={index}>{item}</div>);
    });
    return tempArr;
  }

  function testing() {
    return "함수 테스팅";
  }

  function increase() {
    num = num + 1;
    console.log(num);
  }
  // console.log(if(){})
  // console.log()
  // 값을 내보낸다, 가져온다. << 얘기할 수 있는 것들과 if, for, while의 차이가 무엇인가?
  // '값을 내보낸다, 가져온다' << 변수, 함수 == '수'
  // if 조건문, for,while 반복문 << '문장'

  // document.getElementById().onclick = () => {
  //   num = num + 1;
  //   console.log(num);
  // };
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  return (
    <div className="App">
      {/* {test} */}
      <App1 />
      <div>{test}</div>
      <div onClick={increase}>{num}</div>
      <div>{`bool은${bool}`}</div>
      <div>{str}</div>
      <div>{arr}</div>
      <div>{obj.toString()}</div>
      <div>{`${nul}`}</div>
      <div>{und}</div>
      <div>{bool ? "true" : "false"}</div>
      <div>{testing()}</div>
      {/* {}는 값을 가져야만 출력할 수 있다. 단 Object의 경우에 출력방법이 모호하기 때문에 출력하지 못한다. */}
      <div>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div> */}
        {arrDiv}
        {arrFunc(arr)}
        {/* {arr.forEach((item, index) => {
          return <div key={index}>{item}</div>;
        })} */}
        {arr.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );

  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수 있다.
}

export default App;

class App1 extends React.Component {
  // 컴포넌트를 생성할 때 컴포넌트의 모든 코드를 알 수 없다.<< 그렇기 때문에 상속을 받도록한다.
  // num = 0;
  // 여기서 정의한 것은 this의 프로퍼티로 추가된다.
  constructor(props) {
    // 클래스를 생성할 때 실행되는 코드
    super(props);
    // 상속을 받았을 때 부모의 해당 메소드를 실행한다. <<부모의 constructor
    console.log("construcotr");
    console.log(this);
    // console.log(this.num);
    this.state = { name: "상태값", num: 0, classNames: ["app3"] };
  }

  divRef = React.createRef(); // useRef  ==>doucment.getElementById("")와 비슷한 역할 가상돔에서 특정 div의 정보를 가져오기 위함.

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this);
    console.log(this.state.num);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");

    console.log(this);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this);
  }

  changeClass = () => {
    if (this.state.classNames.indexOf("app4") === -1)
      this.setState({ classNames: [...this.state.classNames, "app4"] });
    // else this.setState({ classNames: [...this.state.classNames.slice(0, 1)] });
    else this.setState({ classNames: [this.state.classNames[0]] });
  };

  increase() {
    // this.num = this.state.num + 1;
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.name);
    console.log(this.state.num);
    // this.state.name = this.state.name + "1";  // 이걸 권장하지않아요 스테이트를 직접적으로 변경하지마라
    // console.log(this.state.name);

    // this.setState({ name: this.state.name + "1" }); // 이 개념을 확실히 알아야한다.
    // console.log(this.state.name);
  }

  changeName = () => {
    this.setState({ name: this.state.name + "1" });
    console.log(this.state.name);
    console.log(this.divRef.current);
  };

  // increase = () => {
  //   this.num = this.num + 1;
  //   console.log(this.num);
  // 여기서의 this는 App1이 된다.
  // 호출하는 곳에서 bind 메소드를 적지않아도된다.

  // };

  render() {
    console.log("render");
    console.log(this);
    return (
      <>
        <div onClick={this.increase.bind(this)}>{this.state.num}</div>
        <div onClick={this.changeName}>{this.state.name}</div>
        <div ref={this.divRef} onClick={this.changeName}>
          {this.state.name}
        </div>
        <div
          className={this.state.classNames.join(" ")}
          onClick={this.changeClass}
        >
          클래스이름설정테스트
        </div>
      </>
    );
  }
}
