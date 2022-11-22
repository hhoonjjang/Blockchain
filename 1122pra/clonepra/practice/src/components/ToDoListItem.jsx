import React from "react";

class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.item);
    console.log(props.index);
    console.log(props.setItem);
  }
  render() {
    return (
      <>
        <div key={this.props.index + "-1"}>
          {this.props.index}
          {this.props.item}
          <button onClick={this.props.index}>삭제</button>
        </div>
      </>
    );
  }
}

export default ToDoListItem;
