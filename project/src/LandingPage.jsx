// import { useEffect, useState } from "react";
import "./LandingPage.css";
import 로고 from "./assets/logo2(2).png";
import 개 from "./assets/개2.jpg";

function LandingPage() {
  return (
    <div className="header_container">
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
              <a href="blank.com">my pet</a>
            </li>
            <li>
              <a href="blank.com">동물병원</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="main">
        <div className="content_container">
          <div id="pet_title">Pet Hub</div>
          <div id="main_content">
            펫허브 메인 페이지를 가려면 버튼을 눌러주세요!
          </div>
          <button className="mainButton">main page</button>
        </div>
        <img src={개} id="dog2" width="500px" height="500px" />
      </div>
    </div>
  );
}

export default LandingPage;
