// import logo from "./logo.svg";
// import "./App.css";
// import ClassComp from "./components/ClassComponents";
// import { useState } from "react";

// function App() {
//   const [isMount, setMount] = useState(true);
//   function changeMount() {
//     setMount(!isMount);
//   }
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App" onClick={changeMount}>
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//       {/* <ClassComp /> */}
//       <header className="App-header"></header>
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fristNum: undefined,
      secondNum: undefined,
      result: undefined,
      calc: undefined,
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  selNum(num) {
    if (this.state.fristNum == undefined) {
      this.setState({ ...this.state, fristNum: num });
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }

  render() {
    // 컴포넌트의 필수요소.(Virtual DOM에 그려지는 HTML 문법)
    // 클래스와 함수 차이로 클래스는 리턴을 안하기때문에 랜더함수를 통해 리턴을 필요로한다.
    // 함수는 리턴을 애초에 해서 리턴값이 필요하다.
    return (
      <div className="calculator">
        <div className="row">
          <BtnComp
            item="7"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 7 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 7 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item={8}
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 8 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 8 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="9"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 9 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 9 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="+"
            onClick={function (e) {
              if (this.state.fristNum && this.state.secondNum) {
                this.setState({ ...this.state, calc: "+" });
              }
            }.bind(this)}
            // onClick={this.selNum.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp
            item="4"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 4 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 4 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="5"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 5 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 5 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="6"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 6 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 6 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="-"
            onClick={function (e) {
              if (this.state.fristNum && this.state.secondNum) {
                this.setState({ ...this.state, calc: "-" });
              }
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp
            item="1"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 1 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 1 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="2"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 2 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 2 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="3"
            // onClick={function (e) {
            //   if (this.state.fristNum == undefined) {
            //     this.setState({ ...this.state, fristNum: 3 });
            //   } else if (!this.state.secondNum) {
            //     this.setState({ ...this.state, secondNum: 3 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            item="*"
            onClick={function (e) {
              if (this.state.fristNum && this.state.secondNum) {
                this.setState({ ...this.state, calc: "*" });
              }
            }.bind(this)}
          />
        </div>
        <div className="row">
          <BtnComp item={this.state.result} />
          <BtnComp item="훈" />
          <BtnComp
            item="="
            onClick={function (e) {
              if (this.state.fristNum && this.state.secondNum) {
                switch (this.state.calc) {
                  case "+":
                    this.setState({
                      ...this.state,
                      result: this.state.fristNum + this.state.secondNum,
                      fristNum: undefined,
                      secondNum: undefined,
                      calc: undefined,
                      // 순서상관없따
                    });
                    break;
                  case "-":
                    this.setState({
                      ...this.state,
                      result: this.state.fristNum - this.state.secondNum,
                      fristNum: undefined,
                      secondNum: undefined,
                      calc: undefined,
                    });
                    break;

                  case "*":
                    this.setState({
                      ...this.state,
                      result: this.state.fristNum * this.state.secondNum,
                      fristNum: undefined,
                      secondNum: undefined,
                      calc: undefined,
                    });
                    break;

                  case "/":
                    this.setState({
                      ...this.state,
                      result: this.state.fristNum / this.state.secondNum,
                      fristNum: undefined,
                      secondNum: undefined,
                      calc: undefined,
                    });

                    break;
                }
              }
            }.bind(this)}
          />
          <BtnComp
            item="/"
            onClick={function (e) {
              if (this.state.fristNum && this.state.secondNum) {
                this.setState({ ...this.state, calc: "/" });
              }
            }.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
