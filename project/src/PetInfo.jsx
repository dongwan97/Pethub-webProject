import { useRef, useCallback, useState, useEffect } from "react";
import 개2 from "./assets/개2.jpg";
import "./PetInfo.css";
import TodoInsert from "./checkList/TodoInsert";
import TodoList from "./checkList/TodoList";
import Chart from "./chart/chart2";
import RandomPhrase from "./pharse/RandomPharse";
import 개9 from "./assets/개9.png";
import { Link } from "react-router-dom";
import 강아지프로필 from "./assets/강아지프로필.png";

function PetInfo() {
  const name = localStorage.getItem("name");
  const species = localStorage.getItem("species");
  const gender = localStorage.getItem("gender");
  const weight = localStorage.getItem("weight");
  const age = localStorage.getItem("age");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "혼합예방주사(DHPPL) : 생후 6~8주에 접종",
      checked: true,
    },
    {
      id: 2,
      text: "코로나바이러스 장염 : 생후 6~8주에 접종",
      checked: true,
    },
    { id: 3, text: "기관/기관지염 : 생후 6~8주에 접종", checked: false },
    // { id: 4, text: "광견병 : 생후 3개월 이상 1회 접종", checked: false },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="PetInfo_container">
      <div className="dogProfile_c">
        <img src={강아지프로필} className="dogProfile" />
      </div>

      <div className="tmp">
        {!name ? (
          <div className="PetProfile">
            <div>Pet hub에 오신걸 환영합니다!</div>
            <div>강아지의 기본사항을</div>
            <div>등록해 주세요.</div>
            <Link to="/InformationForm">
              <button className="button2">등록하기</button>
            </Link>
          </div>
        ) : (
          <div className="PetProfile">
            <div>Pet hub에 오신걸 환영합니다!</div>
            <div>강아지에게 변동 사항이 생겼다면</div>
            <div>새로 등록해 주세요.</div>
            <Link to="/InformationForm">
              <button className="button2">등록하기</button>
            </Link>
          </div>
        )}

        <div className="main">
          {!name ? (
            <div id="main_1">
              <img src={개2} className="dog4" />
              <div id="main_1_container">
                <div id="main_1_title">위에서 정보를 알려주세요 ! </div>
                <table className="pet_info">
                  <tr>
                    <td>종</td>
                    <td>{species}</td>
                  </tr>
                  <tr>
                    <td>성별</td>
                    <td>{gender}</td>
                  </tr>
                  <tr>
                    <td>몸무게</td>
                    <td>{weight}</td>
                  </tr>
                  <tr>
                    <td>나이</td>
                    <td>{age}</td>
                  </tr>
                </table>
              </div>
            </div>
          ) : (
            <div id="main_1">
              <img src={개2} className="dog4" />
              <div id="main_1_container">
                <div id="main_1_title">{name}의 현재 상태에요 !</div>
                <table className="pet_info">
                  <tr>
                    <td>종</td>
                    <td>{species}</td>
                  </tr>
                  <tr>
                    <td>성별</td>
                    <td>{gender}</td>
                  </tr>
                  <tr>
                    <td>몸무게</td>
                    <td>{weight}</td>
                  </tr>
                  <tr>
                    <td>나이</td>
                    <td>{age}</td>
                  </tr>
                </table>
              </div>
            </div>
          )}

          <div id="main_2">
            <div className="main_2_title">놓치면 안되는 건강정보</div>
            <div id="main_2_content">
              <div className="main_2_p">
                <div>
                  강아지 필수 예방 접종은 생후 6주부터 16주까지 2주 간격으로 총
                  6회 실시합니다. <br />
                  심장 사상충과 외부 기생충 예방접종은 월 1회 권장드립니다 .
                </div>
                <div className="main_2_p_2">
                  아래에서 강아지의 건강을 체크하며 관리하세요 !
                </div>
              </div>
              <TodoInsert onInsert={onInsert} />
              <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </div>
          </div>
          <div className="main_3">
            <div className="main_3_title">강아지의 몸무게를 체크하세요!</div>
            <div className="main_3_p">
              사람과 강아지의 비만에 따른 질병은 큰 차이가 없습니다.
              <br />
              당뇨와 관절질환, 심혈관계 질환, 고혈압, 고지혈증 등 개도 사람과
              마찬가지입니다.
            </div>
            <div className="main_3_p2">
              강아지의 몸무게 추세를 확인하고 사료와 간식을 조절해보세요 !
            </div>
            <div>
              {(localStorage.getItem("January") === null) &
              (localStorage.getItem("Feburary") === null) &
              (localStorage.getItem("March") === null) &
              (localStorage.getItem("April") === null) &
              (localStorage.getItem("May") === null) &
              (localStorage.getItem("June") === null) &
              (localStorage.getItem("July") === null) &
              (localStorage.getItem("August") === null) &
              (localStorage.getItem("October") === null) &
              (localStorage.getItem("November") === null) &
              (localStorage.getItem("December") === null) ? (
                <div>
                  <Chart />
                  <div className="ChartWarning">
                    강아지의 몸무게 추세를 확인하고 싶다면, <br />
                    몸무게를 입력해주세요!
                    <Link to="/WeightForm">
                      <button className="WeightFormButton">
                        몸무게 등록하기
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <Chart />
                  <div className="WeightButton2">
                    <Link to="/WeightForm">
                      <button className="WeightFormButton">
                        몸무게 수정하기
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div id="main_4">
            <h3 style={{ color: "black" }}>사진이 들어갈거임</h3>
          </div>
          <div id="main_5">
            <div className="main_5_title">댕댕 띵언</div>
            <RandomPhrase />
            <div className="main_5_2">
              <img src={개9} className="dog9" />
              <div className="main_5_2_p">
                새로고침하여 새로운 띵언을 확인해보세요 !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetInfo;
