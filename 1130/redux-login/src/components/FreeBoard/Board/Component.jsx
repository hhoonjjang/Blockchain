import styled from "styled-components";
import { Link } from "react-router-dom";
const BoardComponent = ({ item, remove, isCreator }) => {
  return (
    <BoardBox>
      Board
      <h1>제목:{item.title}</h1>
      <h3>
        작성자:{item.userName} - {item.createdAt}
      </h3>
      {!isCreator || (
        <span>
          <Link to={`/edit/${item.id}`}>
            <button>수정</button>
          </Link>
          <button
            onClick={() => {
              remove();
            }}
          >
            삭제
          </button>
        </span>
      )}
      <p>{item.text}</p>
    </BoardBox>
  );
};

export default BoardComponent;

const BoardBox = styled.div`
  input {
    padding: 5px 10px;
    border-radius: 5px;
  }
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: black;
    color: yellow;
  }
`;
