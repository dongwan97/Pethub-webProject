// import { useEffect, useState } from "react";
import "./LandingPage.css";
import 개 from "./assets/개2.jpg";
import 개6 from "./assets/개6.png";
import 개7 from "./assets/개7.png";
import 개8 from "./assets/개8.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LandingPageMyPetComp from "./components/LandingPageMyPetComp";
import LandingPageQuestionComp from "./components/LandingPageQuestionComp";
import LandingPageMapComp from "./components/LandingPageMapComp";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="header_container">
      <div id="main">
        <div className="content_container">
          <div id="pet_title">Pet Hub</div>
          <div id="main_content">
            펫허브 메인 페이지를 가려면 버튼을 눌러주세요!
          </div>
          <Link to="/PetInfo">
            <button className="mainButton">main page</button>
          </Link>
        </div>
        <Link to="/PetInfo">
          <img
            src={개}
            id="dog2"
            width="500px"
            height="500px"
            className="LandingPage_bigPicture"
          />
        </Link>
      </div>
      <div className="PContainer">
        <div className="servicesP">
          <div className="servicesP1">
            <div>강아지에 대한 정보부터 건강관리까지,</div>
            <div>나의 강아지의 모든 정보를 이제 한번에 관리하세요</div>
          </div>
          <div>
            <inline className="inlineP">Pethub</inline>와 함께라면 이 모든게
            편리해질거에요!
          </div>
        </div>
      </div>

      <div className="Services">
        <div className="ServicesTitle">Services</div>
        <div className="ServicesImgContainer">
          <div className="ServicesDetail">
            <Link to="/PetInfo">
              <img src={개6} className="ServicesImg" />
            </Link>
            <div className="SerImgTitle">정보 관리</div>
            <div className="SerImgDes">
              나의 펫의 기본정보를 입력하고,
              <br />
              펫을 관리하세요.
            </div>
            <Link to="/PetInfo">
              <button className="PetInfoButton">visit now</button>
            </Link>
          </div>
          <div className="ServicesDetail">
            <Link to="/map">
              <img src={개7} className="ServicesImg" />
            </Link>
            <div className="SerImgTitle">동물병원</div>
            <div className="SerImgDes">
              위급상황을 대비해서,
              <br /> 가까운 병원을 미리 알아두세요.
            </div>
            <Link to="/map">
              <button className="PetInfoButton">visit now</button>
            </Link>
          </div>
          <div className="ServicesDetail">
            <Link to="/QAPage">
              <img src={개8} className="ServicesImg" />
            </Link>
            <div className="SerImgTitle">질문게시판</div>
            <div className="SerImgDes">
              사람들이 자주 묻는 질문을,
              <br /> 손쉽게 확인하세요.
            </div>
            <Link to="/QAPage">
              <button className="PetInfoButton">visit now</button>
            </Link>
          </div>
        </div>
      </div>
      <LandingPageMyPetComp />
      <LandingPageQuestionComp />
      <LandingPageMapComp />
    </div>
  );
}

export default LandingPage;
