import { connect } from "react-redux";

import AddContainer from "./add/Container";
import ListContainer from "./list/Container";
const BoardComponent = ({ userName }) => {
  return (
    <div>
      {userName ? <AddContainer /> : <></>}
      <ListContainer />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(BoardComponent);
