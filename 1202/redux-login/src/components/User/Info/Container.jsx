import { connect } from "react-redux";
import InfoComponent from "./Component";
import store from "../../../modules/store";
import { action } from "../../../modules/userInfo";
import axios from "axios";
const InfoContainer = ({ userName, userId }) => {
  console.log(userName);
  const onClick = () => {
    store.dispatch(action.logOut());
    // axios.post("http://localhost:8080/api/user/logout", {
    //   userId,
    // });
  };
  return <InfoComponent userName={userName} onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
    userId: state.userInfo.userId,
  };
};

export default connect(mapStateToProps)(InfoContainer);
