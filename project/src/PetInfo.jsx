import { useRef, useCallback, useState } from "react";
import 개2 from "./assets/개2.jpg";
import "./PetInfo.css";
import 로고 from "./assets/logo2(2).png";
import 개5 from "./assets/개5.png";
import TodoInsert from "./checkList/TodoInsert";
import TodoList from "./checkList/TodoList";

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
      {localStorage.getItem("name") === null ? (
        <div className="top">
          <img src={개5} className="dog5" />
          <div className="top_title">
            <div>어서오세요 기다리고 있었어요 !</div>
            <div>강아지의 기본사항을 저에게 알려주세요</div>
            <button className="button2">알려주기</button>
          </div>
        </div>
      ) : (
        <div className="top">
          <img src={개5} className="dog5" />
          <div className="top_title">
            <div>어서오세요 기다리고 있었어요 !</div>
            <div>{name}에게 변동사항이 생겼나요? 저에게 알려주세요</div>
            <button className="button2">알려주기</button>
          </div>
        </div>
      )}
      <div className="main">
        {localStorage.getItem("name") === null ? (
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
        <div id="main_3">
          <h3 style={{ color: "black" }}>사진이 들어갈거임</h3>
        </div>
      </div>
    </div>
  );
}

export default PetInfo;
