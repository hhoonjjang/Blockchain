import { useState } from "react";
import RegistComp from "../components/Regist";
import { action } from "../modules/user";
import store from "../store";
const Regist = () => {
  //   const userInfo = store.getState().userInfo;
  const [_, render] = useState(true);

  const regist = (userInfo) => {
    console.log(userInfo);
    // const [userInfo, setUser] = useState([]);

    store.dispatch(
      action.regist({ id: userInfo.id, pw: userInfo.pw, name: userInfo.name })
    );
    render((state) => !state);
  };
  return <RegistComp regist={regist}></RegistComp>;
};

export default Regist;
