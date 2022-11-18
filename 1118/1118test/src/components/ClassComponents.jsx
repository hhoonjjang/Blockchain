import React from "react";

export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Virtual Dom에 추가될 때 실행되는 함수 , 생성할떄
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    // state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // Virtual Dom에서 삭제될 때 실행되는 함수 제거할때
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>

        <div
          onClick={function (e) {
            console.log(this.props.count);

            e.stopPropagation();
            this.props.setCount(this.props.count + 1);
          }.bind(this)}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}

// yarn이란
// - React가 Facebook에서 만든거다.
// - yarn은 React에 최적화하기 위해서 FaceBook에서 만든 패키지 매니저이다.
// -npm이랑 약간은 다르다. => node 18버전 들어오면서 개편됐다.

// -설치법 npm i -g corepack

//'파워셀은 안되는 yarn -v
// yarn create react-app yarntest
