import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Box from "./Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Progress from "./Progress";
// import Progress from './Progress';
import "./Progress.css";

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  padding: 50px 0;
  background-color: #4c200b;
  font-family: "UhBeemysen";
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: auto;
  margin: 0 auto;
  max-width: 1200px;
`;

const QBox = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  text-align: center;
  margin: 30px 0 50px 0;
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
    animation: ${fadeOutAnimation} 0.4s ease-out;
  }
  &.next {
    animation: ${fadeInAnimation} 0.4s ease-in;
  }
`;

function Container(props) {
  const questionBox = [
    "오늘은 오랜만에 쉬는 날! 머리가 조금 복잡해져서 밖으로 나가려고 하는데, 평일에 어떤 고민을 해왔을까?",
    "오늘은 힐링을 위해 소품샵에 가려고 외출을 하였다. 소품샵을 가는 길에 언젠가 한번 가보려고 했던 가게가 보인다. 이 때, 당신에게 드는 생각은?",
    "소품샵에 들어가자마자 마음에 쏙 드는 물건을 발견한 당신! 당신은 어떤 것을 더 먼저 보는가?",
    "소품샵을 둘러보던 도중, 벽에 액자가 걸려있는 것을 발견한다. 그런데..! 여기 분위기랑은 조금 맞지 않은 것 같다. 이 때 떠오른 생각은?",
    "귀여운 것들을 구경하고 있다보니까 핫플인지 사람들이 꽤나 많아졌다. 북적거리는 소품샵 내부에서 어떤 사람이 내 발을 실수로 밟았다. 당신의 반응은?",
    "소품샵을 구경하던 중 우연히 친구를 만났다.  친구가 이 물건을 사는것이 어떠냐고 물어볼 때 당신의 반응은?",
    "사람이 더 많아진 것 같다…! 주위에서 웅성대는 소리가 들려 고개를 돌려보았더니 직원이 진상손님이랑 말다툼을 벌이고 있다. 이 때, 당신이 드는 생각은?",
    "진상손님이 나간 이후 조금 잠잠해진 소품샵에서 소품샵을 본격적으로 쇼핑을 하려고 하는데, 어떻게 구경할 것인가?",
    "소품샾에서 소품을 고르던 당신! 누군가와 손이 겹쳐지는데....",
    "소품샵에서 갑자기 깜짝 이벤트를 진행한다!",
    "계산대로 향한 당신의 장바구니에는 뭐가 들어있나?",
    "가게를 다 둘러보고 이제 가려고 한다.  오늘의 쇼핑이 꽤나 마음에 들었던 당신! 당신의 행동은?",
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
    { mbti: "T", answer: "일단 내려놔." },
    { mbti: "F", answer: "아.. 저 직원 진짜 힘들겠다; " },
    { mbti: "P", answer: "발길이 닿는대로 움직인다." },
    { mbti: "N", answer: "뭐지.. 저 사람..?(결혼까지 생각한다..)" },
    { mbti: "I", answer: "설렁 설렁 참여하거나 구경한다" },
    { mbti: "J", answer: "사려고 했던 물건들" },
    { mbti: "E", answer: "여긴 나만 알기엔 아까워! 동네방네 소문낸다." },
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
    { mbti: "F", answer: "귀여운데?? 당장 구매해버려~~!!" },
    { mbti: "T", answer: "엇 저 사람들 왜 싸우지??" },
    { mbti: "J", answer: "1층부터 정해진 방향대로 움직인다. " },
    {
      mbti: "S",
      answer: "아무렇지 않게 내가 고르려던 걸 골라서 계산하러 간다.",
    },
    { mbti: "E", answer: "누구보다 열심히 참여해서 경품을 탄다" },
    { mbti: "P", answer: "맘에 들었던 물건들" },
    { mbti: "I", answer: "여긴 나만 알고 싶어! 다이어리에 끄적여놓는다." },
  ];
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [result, setResult] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);
  useEffect(() => {
    setAnswerA(answerBoxA[count].answer);
    setAnswerB(answerBoxB[count].answer);
    setQuestion(questionBox[count]);
  }, []);

  const handleAnswerA = () => {
    setClickedIndex(clickedIndex + 1);
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
    }, 300);
    console.log("2");
  };
  const handleAnswerB = () => {
    setClickedIndex(clickedIndex + 1);
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
      console.log("array", array);
    }, 300);
  };

  const navigate = useNavigate();

  const handleResult = () => {
    setAnswerA(answerBoxA[11].answer);
    setAnswerB(answerBoxB[11].answer);
    setQuestion(questionBox[11]);
    setIsLoading(true);
    console.log("데이터", array);
    const choice = [];
    for (let j = 0; j < array.length; j++) {
      // choice.push(Object.values(array[j])); // 이렇게 하면 [['E'],['J']] 이런식으로
      //들어오니까 매우 주의할 것. 꼭 console찍어가면서 확인하기
      const values = Object.values(array[j]);
      choice.push(...values);
    }
    console.log("choice", choice);
    const updatedResult = [];
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const keys = Object.keys(array[i]);
      updatedResult.push(...keys);
      //원래는 result라는 빈 배열을 state로 관리하여 key값들을 집어넣으려 하였으나
      //아무리 해도 값이 들어오지 않아서 그냥 쌩으로 집어넣음
    } // key 값 : 담긴 데이터의 mbti => 결과값 추출하기

    // setResult((prev) => [...updatedResult, ...prev]);//????작동 안 함.
    console.log(updatedResult);
    if (updatedResult.filter((item) => item === "E").length >= 2) {
      result.push("E");
    }
    if (updatedResult.filter((item) => item === "I").length >= 2) {
      result.push("I");
    }
    if (updatedResult.filter((item) => item === "N").length >= 2) {
      result.push("N");
    }
    if (updatedResult.filter((item) => item === "S").length >= 2) {
      result.push("S");
    }
    if (updatedResult.filter((item) => item === "F").length >= 2) {
      result.push("F");
    }
    if (updatedResult.filter((item) => item === "T").length >= 2) {
      result.push("T");
    }
    if (updatedResult.filter((item) => item === "P").length >= 2) {
      result.push("P");
    }
    if (updatedResult.filter((item) => item === "J").length >= 2) {
      result.push("J");
    }
    console.log(result);
    const data = result.join("");
    setTimeout(() => {
      navigate("/result", { state: { data } });
    }, 3000);
    const postData = {
      choices: updatedResult,
      contents: choice,
    };
    console.log("answers", postData);
    axios
      .post("http://127.0.0.1:8000/api/v1/mbti_get/answers/", postData)
      .then(() => console.log("데이터 전송완료"));
    axios
      .post("http://127.0.0.1:8000/api/v1/mbti_get/results/", {
        mbti_result: data,
      })
      .then(() => {
        console.log("mbti값 전송 완료");
      });
  };

  return (
    <div>
      <StyledContainer className="container">
        <Wrapper className="wrapper">
          <div>
            <div class="border"></div>
            <div class="galands">
              <div
                class={`g1 basic ${0 >= 0 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g2 basic ${0 >= 1 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g3 basic ${0 >= 2 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g4 basic ${0 >= 3 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g5 basic ${0 >= 4 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g6 basic ${0 >= 5 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g7 basic ${0 >= 6 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g8 basic ${0 >= 7 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g9 basic ${0 >= 8 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g10 basic ${0 >= 9 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g11 basic ${0 >= 10 - clickedIndex ? "" : "opacity"}`}
              ></div>
              <div
                class={`g12 basic ${0 >= 11 - clickedIndex ? "" : "opacity"}`}
              ></div>
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
