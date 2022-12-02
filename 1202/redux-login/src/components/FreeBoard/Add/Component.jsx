import styled from "styled-components";
import { useState } from "react";
const AddComponent = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <AddBox>
      <input
        type={"text"}
        value={title}
        placeholder={"Title"}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        type={"text"}
        placeholder={"Text"}
        value={text}
        onInput={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(title, text);
        }}
      >
        추가
      </button>
    </AddBox>
  );
};

export default AddComponent;

const AddBox = styled.div`
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
