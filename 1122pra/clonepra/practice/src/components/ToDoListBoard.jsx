import React from "react";
import ToDoListItem from "./ToDoListItem";

class ToDoListBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.item);

    // console.log()
  }

  render() {
    return (
      <>
        <div key="hey" className="hi">
          {this.props.item.map((item, index) => {
            return (
              <ToDoListItem key={index + "-2"} item={item} index={index} />
            );
          })}
        </div>
      </>
    );
  }
}

export default ToDoListBoard;
