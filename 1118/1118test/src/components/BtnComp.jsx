import React from "react";
import styled from "styled-components";

export default class BtnComp extends React.Component {
  // 컴포넌트는 대문자로 시작해야한다. (파스칼 표기법)
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NumPad
        className="num-pad"
        onClick={() => {
          //   console.log(this.props);
          this.props.onClick(+this.props.item);
        }}
      >
        {this.props.item}
        <div>
          <a>a</a>
        </div>
        <div></div>
        <a>a</a>
      </NumPad>
    );
  }
}

const NumPad = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    width: 10px;
    height: 10px;
    background-color: red;
    &:nth-child(2) {
      background-color: blue;
    }
    a {
      color: green;
    }
  }
  &:nth-child(2n) {
    background-color: lightgray;
  }
`;
