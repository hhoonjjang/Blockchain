import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginComponent from "./Component";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";

const LoginContainer = ({ userName }) => {
  const navigate = useNavigate(); //location.href

  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));
  };
  useEffect(() => {
    if (userName) navigate("/");
  }, [userName]);

  return <LoginComponent onClick={onClick} />;
};

const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LoginContainer);
