import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";
import AddComponent from "./Component";

const AddContainer = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userInfo.userName);
  // connect가 필요가 없다.
  const onClick = (title, text) => {
    dispatch(action.add(title, text, userName));
  };
  return !userName || <AddComponent onClick={onClick} />;
};

export default AddContainer;
