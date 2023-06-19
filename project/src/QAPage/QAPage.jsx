import React, { useState } from "react";
import "./QAPage.css";

const QAPage = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "Q. 강아지 발톱관리와 집에서 발톱 깎는 방법에 대해서 알려주세요.",
      answer: (
        <p>
          강아지는 8~12주에 한번씩 발톱을 깎아주면 됩니다.
          <br />
          미용하여 깎아 달라고 할 수 있지만 어릴 때 부터 직접 강아지 발톱을
          깎아줘 보는걸 추천합니다.
          <br />
          한번 배우면 누구나 어렵지 않게 깎을 수 있습니다.
        </p>
      ),
    },
    {
      id: 2,
      question: "Q. 강아지 몸에서 나쁜 냄새가 나요",
      answer: (
        <p>
          피부나 귀 감염증, 항문낭 등에 문제가 생겼을 가능성이 있습니다.
          <br />
          피부에 알러지가 발생한 상태에서 세균이나 곰팡이가 감염된 경우가 가장
          흔하며 치료가 필요할 수 있습니다.
        </p>
      ),
    },
    {
      id: 3,
      question: "Q. 강아지 귀가 지저분해요.",
      answer: (
        <p>
          사람과 마찬가지로 강아지 또한 정상적으로 귀지가 생깁니다.
          <br /> 하지만 알러지 발생 후 곰팡이나 세균 감염증에 의한 과다한 귀지가
          발생 할 때가 문제가 됩니다.
          <br /> 예방을 위해 평소에 주 1~2회 귀 세정제를 사용하여 주세요.
        </p>
      ),
    },
    {
      id: 4,
      question: "Q. 강아지가 대변을 먹어요.",
      answer: (
        <p>
          강아지가 대변을 먹는 식분증은 정상적인 강아지 행동입니다.
          <br /> 나이가 들면 자연스럽게 사라지기도 하지만 계속된다면 교육이
          필요합니다.
        </p>
      ),
    },
    {
      id: 5,
      question: "Q. 강아지가 자꾸 떠는데 어떻게 해야하죠?.",
      answer: (
        <p>
          몸 어딘가에 생긴 통증을 감추기 위한 행동일 수 있습니다.
          <br /> 통증의 원인을 찾아줘야합니다.
        </p>
      ),
    },
  ]);

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    if (expandedQuestion === questionId) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionId);
    }
  };

  return (
    <div className="QA_container">
      <div className="QA_top">자주묻는질문</div>
      {questions.map((item) => (
        <div key={item.id} className="QA_content">
          <div
            className="QA_content_question"
            onClick={() => handleQuestionClick(item.id)}
            tabIndex={0} // tabIndex 추가
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {item.question}
          </div>
          <div
            className="QA_content_answer"
            style={{
              maxHeight: expandedQuestion === item.id ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <div>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QAPage;
