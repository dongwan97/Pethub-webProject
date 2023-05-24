import { useState } from "react";
import "./InformationForm.css";
import 로고 from "./assets/logo2(2).png";

function InformationForm() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 입력된 정보를 저장하거나 다른 페이지로 전달하는 로직을 작성합니다.
    // 여기서는 간단히 콘솔에 정보를 출력합니다.
    console.log("Name:", name);
    console.log("Species:", species);
    console.log("Gender:", gender);
    console.log("Weight:", weight);
    console.log("Age:", age);

    //localStorage에 정보를 저장
    localStorage.setItem("name", name);
    localStorage.setItem("species", species);
    localStorage.setItem("gender", gender);
    localStorage.setItem("weight", weight);
    localStorage.setItem("age", age);

    // 입력된 정보 초기화
    setName("");
    setSpecies("");
    setGender("");
    setWeight("");
    setAge("");
  };

  return (
    <div className="body">
      <div className="title_container">
        <img src={로고} className="logo" />
        <div className="header_title">Pet hub</div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="input_container">
          <div>
            이름
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            종
            <input
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
            />
          </div>
          <div>
            {" "}
            성별
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div>
            몸무게
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            {" "}
            나이
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
          </div>
        </div>
        <button type="submit" className="button1">
          저장하기
        </button>
      </form>
    </div>
  );
}

export default InformationForm;
