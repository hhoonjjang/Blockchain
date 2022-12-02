// import store from "../../../modules/store";
import styled from "styled-components";
import dayjs from "dayjs";
const ListComponent = ({ boardAdd }) => {
  console.log(boardAdd);
  return (
    <Display>
      <div>디스플레이</div>
      {boardAdd.map((item, index) => {
        console.log(item);
        return (
          <div key={`title-${index}`} className="title">
            <span>작성자:{item.userInfo.userName}</span> ㅣ{" "}
            <span>제목:{item.title}</span> ㅣ<span>내용:{item.contents}</span>{" "}
            ㅣ{" "}
            <span>
              작성시간:{new dayjs(item.date).format("YYYY-MM-DD-HH-mm-ss")}
            </span>
            <button>삭제하기</button>
          </div>
        );
      })}
      <div></div>
    </Display>
  );
};
export default ListComponent;

const Display = styled.div`
  border: 2px solid black;
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: black;
    color: yellow;
  }
`;
