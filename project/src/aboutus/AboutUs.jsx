import "./AboutUs.css";
import 기획서1 from "../assets/기획서이미지/기획서1.png";
import 기획서2 from "../assets/기획서이미지/기획서2.png";
import 기획서3 from "../assets/기획서이미지/기획서3.png";
import 기획서4 from "../assets/기획서이미지/기획서4.png";
import 기획서5 from "../assets/기획서이미지/기획서5.png";

function AboutUs() {
  return <div className="tmp1">About Us를 위한 페이지
      <img className="proposal-image" src={기획서1}/>
      <img className="proposal-image" src={기획서2}/>
      <img className="proposal-image" src={기획서3}/>
      <img className="proposal-image" src={기획서4}/>
      <img className="proposal-image" src={기획서5}/>
  </div>;
  
}

export default AboutUs;
