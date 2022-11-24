import styled from "styled-components";
import { TodoBtn } from "../../setting";
import edit from "./edit.gif";
import remove from "./remove.gif";
import { Link } from "react-router-dom";

import { STATUSLIST } from "../../setting";

export default function Item({ item, index, setList }) {
  return (
    <ItemBox>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn className="sky1">
            <img
              src={edit}
              alt="edit"
              style={
                {
                  //   filter:
                  // "invert(67%) sepia(100%) saturate(2098%) hue-rotate(144deg) brightness(98%) contrast(91%)",
                }
              }
            ></img>
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          className="todo1"
          onClick={() => {
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img src={remove} alt=""></img>
        </TodoBtn>
      </td>
    </ItemBox>
  );
}

const ItemBox = styled.tr`
  text-align: center;
  height: 50px;
  td {
    border-bottom: 1px solid lightgray;
    img {
      width: 200px;
    }
  }
`;
