import { connect } from "react-redux";
import ListComponent from "./Component";

const ListContainer = ({ boardAdd }) => {
  console.log(boardAdd);
  return <ListComponent boardAdd={boardAdd} />;
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    boardAdd: state.boardAdd,
  };
};

export default connect(mapStateToProps)(ListContainer);
