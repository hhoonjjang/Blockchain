import styled from "styled-components";
import { useState } from "react";
const Component = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  return (
    <AddBox>
      <div>띠쁘 추가게시판</div>
      <div>
        <input
          type="text"
          value={title}
          placeholder="제목을 입력하세욧"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={contents}
          placeholder="내용을 입력해주세욧"
          onInput={(e) => {
            setContents(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => {
            onClick(title, contents, new Date());
          }}
        >
          추가
        </button>
        <button>취소</button>
      </div>
    </AddBox>
  );
};

export default Component;

const AddBox = styled.div`
  margin: auto;
  border: 2px solid blue;
  width: 350px;
  padding: 5px 10px;
  div {
    margin-bottom: 20px;

    &:last-child {
      display: flex;
      justify-content: space-around;
    }
  }

  input {
    padding: 5px 10px;
    border-radius: 5px;
    width: 300px;
  }
  textarea {
    width: 300px;
    height: 200px;
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
