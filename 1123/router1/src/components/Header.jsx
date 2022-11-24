import { Link } from "react-router-dom";
import { useState } from "react";
import queryString from "query-string";
function Header() {
  const [searchStr, setSearchStr] = useState("");

  return (
    <div>
      Header!
      <input
        value={searchStr}
        onInput={(e) => {
          setSearchStr(e.target.value);
        }}
        placeholder="검색어를 입력하세요"
      />
      <div>
        <Link to="/" state={{ search: searchStr }}>
          {/* state props를 사용해서 데이터를 전달할 수 있다. */}
          Home
        </Link>{" "}
        ㅣ <Link to="login">Log in</Link> ㅣ <Link to="log/in">Log In 2</Link>{" "}
        ㅣ{" "}
        <Link to={"log/out?" + queryString.stringify({ search: searchStr })}>
          Log Out 2
        </Link>
      </div>
    </div>
  );
}

export default Header;
