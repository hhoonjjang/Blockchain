import LoginComp from "../components/Login";
import { useState } from "react";
import store from "../store";
import { action } from "../modules/user";
const Login = () => {
  const [_, render] = useState(true);
  const login = (id) => {
    store.dispatch(action.login(id));
    render((state) => !state);
  };
  return <LoginComp login={login}></LoginComp>;
};

export default Login;
