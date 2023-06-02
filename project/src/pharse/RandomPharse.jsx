import "../pharse/RandomPharse.css";

const RandomPhrase = () => {
  const phrases = [
    "개는 자기 자신보다 당신을 더 사랑하는 유일한 생명체이다. - 조쉬 빌링스",
    "개는 우리의 삶의 전체는 아니다 그러나 그들은 우리의 삶을 완벽하게 한다. - 로저 카라스",
    "개에게 삶의 목적은 단 한가지 마음을 바치는것. - J.R. 아커리지",
    "행복은 포근한 강아지다. - 찰스 슐츠",
    "개의 삶은 짧다 그것만이 개의 유일한 단점이다. - 아구스타스 헤어",
    // 추가적인 문구들을 여기에 추가할 수 있습니다.
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  return <p className="randomPharse">{randomPhrase}</p>;
};

export default RandomPhrase;
