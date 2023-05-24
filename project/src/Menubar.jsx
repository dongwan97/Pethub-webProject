import 로고 from "./assets/logo2(2).png";

function MenuBar() {
  return (
    <div id="header_container">
      <div id="header">
        <nav id="nav">
          <div id="header_left">
            <img src={로고} id="dog1" />
            <div id="header_title">Pet hub</div>
          </div>
          <ul id="navbar_menu">
            <li>
              <a href="blank.com" id="a_home">
                Home
              </a>
            </li>
            <li>
              <a href="blank.com">about us</a>
            </li>
            <li>
              <a href="blank.com">기획서</a>
            </li>
            <li>
              <a href="blank.com">my pet</a>
            </li>
            <li>
              <a href="blank.com">동물병원</a>
            </li>
            <li>
              <a href="blank.com">장터게시판</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuBar;
