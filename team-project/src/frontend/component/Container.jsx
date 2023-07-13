import styled from "styled-components";
import { useState } from "react";
import Box from "./Box";

const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  padding: 150px 0;
  background-color: #d88a49;
  font-family: "UhBeemysen";
  font-size: 30px;
  font-weight: 700;
  line-height: 2;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  // border: 1px solid black;
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
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
let count = 0;
function Container(props) {
  const questionBox = [
    "오늘은 힐링을 위해 소품샵에 가려고 외출을 하였다. 소품샵을 가는 길에 언젠가 한번 가보려고 했던 가게가 보인다. 이 때, 당신에게 드는 생각은?",
    "소품샵에 들어가자마자 마음에 쏙 드는 물건을 발견한 당신! 당신은 어떤 것을 더 먼저 보는가?",
    "소품샵을 둘러보던 도중, 벽에 액자가 걸려있는 것을 발견한다. 그런데..! 여기 분위기랑은 조금 맞지 않은 것 같다. 이 때 떠오른 생각은?",
    "귀여운 것들을 구경하고 있다보니까 핫플인지 사람들이 꽤나 많아졌다. 북적거리는 소품샵 내부에서 어떤 사람이 내 발을 실수로 밟았다. 당신의 반응은?",
    "사람이 더 많아진 것 같다…! 주위에서 웅성대는 소리가 들려 고개를 돌려보았더니 직원이 진상손님이랑 말다툼을 벌이고 있다. 이 때, 당신이 드는 생각은?",
    "진상손님이 나간 이후 조금 잠잠해진 소품샵에서 소품샵을 본격적으로 쇼핑을 하려고 하는데, 어떻게 구경할 것인가?",
    "가게를 다 둘러보고 이제 가려고 한다.  오늘의 쇼핑이 꽤나 마음에 들었던 당신! 당신의 행동은?",
  ];
  const answerBoxA = [
    "오늘은 소품샵을 들르기로 했으니까 소품샵으로 가야지! ",
    "가격",
    "나는 아무 생각이 없다.. 아무런 생각이 없기 때문이다.. ",
    "아야! (내가 밟혔다는 사실을 어떻게든 티낸다)",
    "아.. 저 직원 진짜 힘들겠다; ",
    "발길이 닿는대로 움직인다.",
    "여긴 나만 알기엔 아까워! 동네방네 소문낸다.",
  ];
  const answerBoxB = [
    "이왕 나온 김에 저기도 들렀다가 가자! ",
    "디자인",
    "왜 저런 뜬금없는 게 걸려있지? 사장님 아들이 그리신건가? 아닌가? 저기에 왜 있지? 샀나? 돈 주고 산다고? (이하 생략) ",
    "아야..(아프지만 넘어간다)",
    "엇 저 사람들 왜 싸우지??",
    "1층부터 정해진 방향대로 움직인다. ",
    "여긴 나만 알고 싶어! 다이어리에 끄적여놓는다.",
  ];
  const [question, setQuestion] = useState(
    "오늘은 오랜만에 쉬는 날! 머리가 조금 복잡해져서 밖으로 나가려고 하는데, 평일에 어떤 고민을 해왔을까?"
  );
  const [answerA, setAnswerA] = useState("미래에 대한 두루뭉실한 고민");
  const [answerB, setAnswerB] = useState("오늘 당장 해야하는 것에 대한 고민");

  const handleAnswer = () => {
    setAnswerA(answerBoxA[count]);
    setAnswerB(answerBoxB[count]);
    setQuestion(questionBox[count]);
    count++;
  };
  return (
    <div>
      <StyledContainer className="container">
        <Wrapper className="wrapper">
          <QBox className="box_question">
            <div>{question}</div>
          </QBox>
          <Grid>
            <Box
              className="box_answer_1"
              handleClick={handleAnswer}
              text={answerA}
            ></Box>
            <Box
              className="box_answer_2"
              handleClick={handleAnswer}
              text={answerB}
            />
          </Grid>
        </Wrapper>
      </StyledContainer>
    </div>
  );
}
export default Container;
