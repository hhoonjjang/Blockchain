import styled from "styled-components";
import { useState } from "react";

const EditComponent = ({ item, onClick }) => {
  const [title, setTitle] = useState(item.title);
  const [text, setText] = useState(item.text);
  return (
    <EditBox>
      EDIT
      <h1>
        <input
          value={title}
          type={"text"}
          placeholder={"Title"}
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
      </h1>
      <h3>
        작성자:{item.userName} - {item.createdAt}
      </h3>
      <p>
        <textarea
          value={text}
          type={"text"}
          placeholder={"Text"}
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
      </p>
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        수정확인
      </button>
    </EditBox>
  );
};

export default EditComponent;

const EditBox = styled.div`
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
