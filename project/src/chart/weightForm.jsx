import { useState } from "react";
import "./WeightForm.css";
import 로고 from "../assets/logo2(2).png";
import { useNavigate } from "react-router";

function WeightForm() {
  const navigate = useNavigate();

  const [January, setJanuary] = useState(localStorage.getItem("January") || "");
  const [February, setFebruary] = useState(
    localStorage.getItem("February") || ""
  );
  const [March, setMarch] = useState(localStorage.getItem("March") || "");
  const [April, setApril] = useState(localStorage.getItem("April") || "");
  const [May, setMay] = useState(localStorage.getItem("May") || "");
  const [June, setJune] = useState(localStorage.getItem("June") || "");
  const [July, setJuly] = useState(localStorage.getItem("July") || "");
  const [August, setAugust] = useState(localStorage.getItem("August") || "");
  const [September, setSeptember] = useState(
    localStorage.getItem("September") || ""
  );
  const [October, setOctober] = useState(localStorage.getItem("October") || "");
  const [November, setNovember] = useState(
    localStorage.getItem("November") || ""
  );
  const [December, setDecember] = useState(
    localStorage.getItem("December") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력된 정보를 저장하거나 다른 페이지로 전달하는 로직을 작성합니다.
    // 여기서는 간단히 콘솔에 정보를 출력합니다.
    console.log("January:", January);
    console.log("February:", February);
    console.log("March:", March);
    console.log("April:", April);
    console.log("May:", May);
    console.log("June:", June);
    console.log("July:", July);
    console.log("August:", August);
    console.log("September:", September);
    console.log("October:", October);
    console.log("November:", November);
    console.log("December:", December);

    //localStorage에 정보를 저장
    localStorage.setItem("January", January);
    localStorage.setItem("February", February);
    localStorage.setItem("March", March);
    localStorage.setItem("April", April);
    localStorage.setItem("May", May);
    localStorage.setItem("June", June);
    localStorage.setItem("July", July);
    localStorage.setItem("August", August);
    localStorage.setItem("September", September);
    localStorage.setItem("October", October);
    localStorage.setItem("November", November);
    localStorage.setItem("December", December);

    // 입력된 정보 초기화
    // setJanuary("");
    // setFebruary("");
    // setMarch("");
    // setApril("");
    // setMay("");
    // setJune("");
    // setJuly("");
    // setAugust("");
    // setSeptember("");
    // setOctober("");
    // setNovember("");
    // setDecember("");
  };

  return (
    <div className="body2">
      <div className="title_container2">
        <img src={로고} className="logo2" />
        <div className="header_title2">Pet hub</div>
      </div>
      <form onSubmit={handleSubmit} className="form2">
        <div className="input_container2">
          <div>
            <div>
              January
              <input
                type="text"
                value={January}
                onChange={(e) => setJanuary(e.target.value)}
              />
            </div>
            <div>
              February
              <input
                type="text"
                value={February}
                onChange={(e) => setFebruary(e.target.value)}
              />
            </div>
            <div>
              March
              <input
                type="text"
                value={March}
                onChange={(e) => setMarch(e.target.value)}
              />
            </div>
            <div>
              April
              <input
                type="text"
                value={April}
                onChange={(e) => setApril(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              May
              <input
                type="text"
                value={May}
                onChange={(e) => setMay(e.target.value)}
              />
            </div>
            <div>
              June
              <input
                type="text"
                value={June}
                onChange={(e) => setJune(e.target.value)}
              />
            </div>
            <div>
              July
              <input
                type="text"
                value={July}
                onChange={(e) => setJuly(e.target.value)}
              />
            </div>
            <div>
              August
              <input
                type="text"
                value={August}
                onChange={(e) => setAugust(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              September
              <input
                type="text"
                value={September}
                onChange={(e) => setSeptember(e.target.value)}
              />
            </div>
            <div>
              October
              <input
                type="text"
                value={October}
                onChange={(e) => setOctober(e.target.value)}
              />
            </div>
            <div>
              November
              <input
                type="text"
                value={November}
                onChange={(e) => setNovember(e.target.value)}
              />
            </div>
            <div>
              December
              <input
                type="text"
                value={December}
                onChange={(e) => setDecember(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="button3" onClick={() => navigate(-1)}>
          저장하기
        </button>
      </form>
    </div>
  );
}

export default WeightForm;
