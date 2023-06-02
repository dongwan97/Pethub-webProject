import React from "react";
import { Link } from "react-router-dom";
import 개12 from "../assets/개12.png";
import "./404.css";
import { useNavigate } from "react-router-dom";

const error = () => {
  const navigate = useNavigate();

  return (
    <div className="errorBody">
      <div>
        <img src={개12} className="dog10" />
      </div>
      <div className="errorP">
        <div className="errorP1">웹페이지를 찾을 수 없어요...</div>
        <div className="errorP2">다음 방법을 시도해보세요.</div>
        <ul className="errorList">
          <li>연결 확인</li>
          <li>주소 확인</li>
          <li>다시 시도</li>
        </ul>
        <div className="errorButtonContainer">
          <button onClick={() => navigate(-1)} className="errorButton">
            뒤로 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default error;
