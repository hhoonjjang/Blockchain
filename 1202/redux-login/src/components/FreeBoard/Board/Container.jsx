import BoardComponent from "./Component";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { action } from "../../../modules/board";
import CommentContainer from "../Comment/Container";
const BoardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(useLocation());
  //   useParams 의 결과는 {id : xxx}으로 나온다.
  console.log(id);
  const item = useSelector((state) =>
    state.board.find((item) => item.id == id)
  );

  const userName = useSelector((state) => state.userInfo.userName);
  const commentUserName = useSelector((state) => state.comment.userName);
  const remove = () => {
    dispatch(action.remove(item.id));
    navigate("/");
  };

  //   useEffect(() => {
  //     if (!item) navigate("/");
  //   }, [item]);

  return (
    <>
      <BoardComponent
        item={item}
        remove={remove}
        isCreator={userName == item.userName}
      />
      <CommentContainer userName={userName} boardId={id} />
      {/* {userName == commentUserName ? (
        <CommentContainer userName={userName} boardId={id} />
      ) : (
        <></>
      )} */}
    </>
  );
};

export default BoardContainer;
