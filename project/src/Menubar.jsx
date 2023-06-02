import 로고 from "./assets/logo2(2).png";
import { Outlet } from "react-router";
import "./Menubar.css";
import { Link } from "react-router-dom";

function MenuBar() {
  // const navigate = useNavigate();
  // <button onClick={() => navigate(-1)}>뒤로가기</button>;

  return (
    <div id="header_container">
      <div id="header">
        <nav id="nav">
          <div id="header_left">
            <Link to="/">
              <img src={로고} id="dog1" />
            </Link>
            <Link to="/">
              <div id="header_title">Pet hub</div>
            </Link>
          </div>
          <ul id="navbar_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/PetInfo">my pet</Link>
            </li>
            <li>
              <Link to="/blank.com">동물병원</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default MenuBar;
