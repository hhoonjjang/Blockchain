import EditComponent from "./Component";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";

const EditContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(useLocation());
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );
  const onClick = (title, text) => {
    dispatch(action.edit(id, title, text));
    navigate(`/board/${id}`);
  };
  return <EditComponent onClick={onClick} item={item} />;
};

export default EditContainer;
