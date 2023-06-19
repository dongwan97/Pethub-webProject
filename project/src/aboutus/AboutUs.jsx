import "./AboutUs.css";
import 기획서1 from "../assets/기획서이미지/기획서1.png";
import 기획서2 from "../assets/기획서이미지/기획서2.png";
import 기획서3 from "../assets/기획서이미지/기획서3.png";
import 기획서4 from "../assets/기획서이미지/기획서4.png";
import 기획서5 from "../assets/기획서이미지/기획서5.png";
import 팀원1 from "../assets/member1.jpg";
import 팀원2 from "../assets/member2.jpg";

import { useEffect } from "react";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tmp1">
      {/* <div className="AboutUS_top">
        <div className="AboutUS_top1">
          Pethub는 강아지를 매개로 사용자에게 흥미로운 경험을 선사합니다.
        </div>
        <div className="AboutUS_top1"> 저희 Pethub 멤버를 소개합니다.</div>
      </div> */}

      <div className="PContainer">
        <div className="servicesP">
          <div className="servicesP1">
            <div>
              저희 Pethub는 강아지의 건강을 쉽게 관리 할 수 있는 페이지입니다.
            </div>
          </div>
          <div>
            <inline className="inlineP">Pethub</inline>를 만드는데 기여했던
            팀원을 소개합니다.
          </div>
        </div>
      </div>

      <div className="member_container">
        <div className="member1_container">
          <div className="member1">
            <img className="member1_image" src={팀원1} />
            <div>통계학과</div>
            <div>김동완</div>
          </div>
          <div className="member1_intro">
            <p>안녕하세요 ! 도전을 좋아하는 예비 개발자 김동완입니다.</p>
            <p>
              이번 프로젝트 쉽지 않았지만 그만큼 많이 배웠고 의미있던
              경험이였던거같아요. 다들 고생많으셨습니다.
            </p>
          </div>
        </div>

        <div className="member2_container">
          <div className="member2_intro">
            <p>
              안녕하세요! 프로그래밍을 통해 사람들의 더 나은 일상을 만들고 싶은
              예비 개발자입니다!!
            </p>
          </div>
          <div className="member2">
            <img className="member2_image" src={팀원2} />
            <div>전자전기공학부</div>
            <div>홍범선</div>
          </div>
        </div>
      </div>
      <img className="proposal-image" src={기획서1} />
      <img className="proposal-image" src={기획서2} />
      <img className="proposal-image" src={기획서3} />
      <img className="proposal-image" src={기획서4} />
      <img className="proposal-image" src={기획서5} />
    </div>
  );
}

export default AboutUs;
