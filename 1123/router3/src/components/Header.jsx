import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>ㅣ <Link to="/login">Log in</Link> ㅣ{" "}
      <Link to="log/in">Log in 2</Link> ㅣ <Link to={"log/out"}>Log out 2</Link>
      {/* a 태그 대신 사용한다. */}
      {/* a 태그를 사용하는 것은 외부 웹페에지에 접근할 때 사용한다.<<localhost->naever.com */}
    </div>
  );
}
