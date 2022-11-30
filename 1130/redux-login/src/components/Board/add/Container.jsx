import store from "../../../modules/store";
import Component from "./Component";
import { action } from "../../../modules/boardAdd";

const AddContainer = () => {
  const onClick = (title, contents, date) => {
    console.log(date);
    store.dispatch(
      action.add(title, contents, date, store.getState().userInfo)
    );
  };
  return <Component onClick={onClick} />;
};

export default AddContainer;
