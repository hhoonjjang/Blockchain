import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import AddContainer from "./Add/Container";
import ListContainer from "./List/Container";
import EditContainer from "./Edit/Container";
import BoardContainer from "./Board/Container";

const FreeBoard = () => {
  return (
    <FreeBoardBox>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddContainer />
              <ListContainer />
            </>
          }
        />
        <Route path="/board/:id" element={<BoardContainer />} />
        <Route path="/edit/:id" element={<EditContainer />} />
      </Routes>
      {/* <BoardContainer /> */}
      {/* <EditContainer /> */}
    </FreeBoardBox>
  );
};

export default FreeBoard;

const FreeBoardBox = styled.div``;
