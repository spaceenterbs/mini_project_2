import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Box from "./Box";
import { useNavigate } from "react-router-dom";
import Progress from "./Progress";
// import Progress from './Progress';
import "./Progress.css";

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  padding: 50px 0;
  background-color: #d88a49;
  font-family: "UhBeemysen";
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;

  border: 1px solid black;
  margin: 0 auto;
  max-width: 1200px;
`;

const QBox = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
`;
const fadeOutAnimation = keyframes`
from {
    opacity:1;
}
to {
    opacity:0;
}
`;
const fadeInAnimation = keyframes`
from {
    opacity : 0;
}
to {
    opacity : 1;
}
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  &.click {
    animation: ${fadeOutAnimation} 0.6s ease-out;
  }
  &.next {
    animation: ${fadeInAnimation} 0.6s ease-in;
  }
`;

function Container(props) {
  const questionBox = [
    "오늘은 오랜만에 쉬는 날! 머리가 조금 복잡해져서 밖으로 나가려고 하는데, 평일에 어떤 고민을 해왔을까?",
    "오늘은 힐링을 위해 소품샵에 가려고 외출을 하였다. 소품샵을 가는 길에 언젠가 한번 가보려고 했던 가게가 보인다. 이 때, 당신에게 드는 생각은?",
    "소품샵에 들어가자마자 마음에 쏙 드는 물건을 발견한 당신! 당신은 어떤 것을 더 먼저 보는가?",
    "소품샵을 둘러보던 도중, 벽에 액자가 걸려있는 것을 발견한다. 그런데..! 여기 분위기랑은 조금 맞지 않은 것 같다. 이 때 떠오른 생각은?",
    "귀여운 것들을 구경하고 있다보니까 핫플인지 사람들이 꽤나 많아졌다. 북적거리는 소품샵 내부에서 어떤 사람이 내 발을 실수로 밟았다. 당신의 반응은?",
    "사람이 더 많아진 것 같다…! 주위에서 웅성대는 소리가 들려 고개를 돌려보았더니 직원이 진상손님이랑 말다툼을 벌이고 있다. 이 때, 당신이 드는 생각은?",
    "진상손님이 나간 이후 조금 잠잠해진 소품샵에서 소품샵을 본격적으로 쇼핑을 하려고 하는데, 어떻게 구경할 것인가?",
    "가게를 다 둘러보고 이제 가려고 한다.  오늘의 쇼핑이 꽤나 마음에 들었던 당신! 당신의 행동은?",
    "9",
    "10",
    "11",
    "12",
  ];
  const answerBoxA = [
    { mbti: "N", answer: "미래에 대한 두루뭉실한 고민" },
    {
      mbti: "J",
      answer: "오늘은 소품샵을 들르기로 했으니까 소품샵으로 가야지! ",
    },
    { mbti: "F", answer: "가격" },
    {
      mbti: "S",
      answer: "나는 아무 생각이 없다.. 아무런 생각이 없기 때문이다.. ",
    },
    { mbti: "E", answer: "아야! (내가 밟혔다는 사실을 어떻게든 티낸다)" },
    { mbti: "F", answer: "아.. 저 직원 진짜 힘들겠다; " },
    { mbti: "P", answer: "발길이 닿는대로 움직인다." },
    { mbti: "E", answer: "여긴 나만 알기엔 아까워! 동네방네 소문낸다." },
    { mbti: "1a", answer: "1a" },
    { mbti: "2a", answer: "2a" },
    { mbti: "3a", answer: "3a" },
    { mbti: "4a", answer: "4a" },
  ];
  const answerBoxB = [
    { mbti: "S", answer: "오늘 당장 해야하는 것에 대한 고민" },
    { mbti: "P", answer: "이왕 나온 김에 저기도 들렀다가 가자! " },
    { mbti: "T", answer: "디자인" },
    {
      mbti: "N",
      answer:
        "왜 저런 뜬금없는 게 걸려있지? 사장님 아들이 그리신건가? 아닌가? 저기에 왜 있지? 샀나? 돈 주고 산다고? (이하 생략) ",
    },
    { mbti: "I", answer: "아야..(아프지만 넘어간다)" },
    { mbti: "T", answer: "엇 저 사람들 왜 싸우지??" },
    { mbti: "J", answer: "1층부터 정해진 방향대로 움직인다. " },
    { mbti: "I", answer: "여긴 나만 알고 싶어! 다이어리에 끄적여놓는다." },
    { mbti: "1b", answer: "1b" },
    { mbti: "2b", answer: "2b" },
    { mbti: "3b", answer: "3b" },
    { mbti: "4b", answer: "4b" },
  ];
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  useEffect(() => {
    setAnswerA(answerBoxA[count].answer);
    setAnswerB(answerBoxB[count].answer);
    setQuestion(questionBox[count]);
  }, []);

  const handleAnswerA = () => {
    setProgressCount(progressCount + 1);
    if (count < 11) {
      setIsClick(true);
      console.log("1");
    }
    setTimeout(() => {
      if (count < 12) {
        setArray((prevArray) => [
          { [answerBoxA[count].mbti]: answerA },
          ...prevArray,
        ]);
      }
      console.log("3");
      if (count === 11) {
        setAnswerA(answerBoxA[11].answer);
        setAnswerB(answerBoxB[11].answer);
        setQuestion(questionBox[11]);
        setCount(count + 1);
      } else if (count > 11) {
        return;
      } else {
        setAnswerA(answerBoxA[count + 1].answer);
        setAnswerB(answerBoxB[count + 1].answer);
        setQuestion(questionBox[count + 1]);
        setIsClick(false);
        setCount(count + 1);
        console.log("4");
        console.log("카운트", count);
      }
      console.log("5");
      console.log(array);
    }, 500);
    console.log("2");
  };
  const handleAnswerB = () => {
    setProgressCount(progressCount + 1);
    if (count < 11) {
      setIsClick(true);
    }
    setTimeout(() => {
      if (count < 12) {
        setArray((prevArray) => [
          { [answerBoxB[count].mbti]: answerB },
          ...prevArray,
        ]); // setState함수인 setArray는 비동기적으로 작동하기 때문에
        // 상태 업데이트를 한 직후에 상태를 확인할 수 없다. 그래서 다음 버튼 눌렀을 때에야 업데이트 된 상태를 확인가능
        // 값이 들어오긴 함 -> 마지막 8번 누르고 count가 8이되니까 조건문으로 결과보기 버튼 구현할 것.
        // 8번 답 누르면 결과보기 버튼 나오고(8번까지 저장된 상태) , 결과보기 버튼 누르면 그대로 전송 or 결과 계산
      }
      if (count === 11) {
        setAnswerA(answerBoxA[11].answer);
        setAnswerB(answerBoxB[11].answer);
        setQuestion(questionBox[11]);
        setCount(count + 1);
      } else if (count > 11) {
        return;
      } else {
        setAnswerA(answerBoxA[count + 1].answer);
        setAnswerB(answerBoxB[count + 1].answer);
        setQuestion(questionBox[count + 1]);
        setIsClick(false);
        setCount(count + 1);
      }
      console.log(array);
    }, 500);
  };

  const navigate = useNavigate();

  const handleResult = () => {
    setAnswerA(answerBoxA[11].answer);
    setAnswerB(answerBoxB[11].answer);
    setQuestion(questionBox[11]);
    console.log("데이터", array);
    setIsLoading(true);
    for (let i = 0; i < array.length; i++) {
      console.log(Object.keys(array[i]));
      setResult((prevArray) => [Object.keys(array[i]), ...prevArray]);
    } // key 값 : 담긴 데이터의 mbti => 결과값 추출하기
    console.log(result);
    const data = "산이 바보";
    setTimeout(() => {
      navigate("/result", { state: { data } });
    }, 2000);
  };

  return (
    <div>
      <StyledContainer className="container">
        <Wrapper className="wrapper">
          <div>
            <div class="border"></div>
            <div class="galands">
              <div class="g1"></div>
              <div class="g2"></div>
              <div class="g3"></div>
              <div class="g4"></div>
              <div class="g5"></div>
              <div class="g6"></div>
              <div class="g7"></div>
              <div class="g8"></div>
              <div class="g9"></div>
              <div class="g10"></div>
              <div class="g11"></div>
              <div class="g12"></div>
            </div>
          </div>
          {/* <Progress progressCount={progressCount} /> */}
          {isLoading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <div>
              <QBox className="box_question">
                <div>{question}</div>
              </QBox>
              <Grid className={`grid ${isClick ? "click" : "next"}`}>
                <Box
                  className="box_answer_1"
                  handleClick={handleAnswerA}
                  text={answerA}
                ></Box>
                <Box
                  className="box_answer_2"
                  handleClick={handleAnswerB}
                  text={answerB}
                />
              </Grid>
              {count === 12 ? (
                <div
                  style={{
                    width: 500,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button
                    style={{
                      width: 200,
                      height: 50,
                    }}
                    onClick={handleResult}
                  >
                    결과보기
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </Wrapper>
      </StyledContainer>
    </div>
  );
}
export default Container;
