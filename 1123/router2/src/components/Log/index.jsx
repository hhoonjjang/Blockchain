import { Outlet } from "react-router-dom";

function Log() {
  return (
    <div>
      <Outlet />
      {/* 하위 라우터의 위치를 결정한다.                                                             */}
      Log!
    </div>
  );
}

export default Log;
