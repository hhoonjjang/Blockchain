import { Link, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useState } from "react";

import store from "../store";
export default function EditInput() {
  console.log(useLocation());
  console.log(queryString.parse(useLocation().search).value);
  const [a, setA] = useState(1);
  const [tempValue, setValue] = useState(0);
  const searchIndex = queryString.parse(useLocation().search).value;
  //   setIndex(queryString.parse(useLocation().search).value);
  return (
    <div>
      <input
        type="text"
        onInput={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <Link to={"/"}>
        <button
          onClick={() => {
            store.dispatch({
              type: "edit1",
              payload: { tempValue, searchIndex },
            });
            setA(-a);
          }}
        >
          확인
        </button>
      </Link>
      <Link to={"/"}>
        <button>취소</button>
      </Link>
    </div>
  );
}
