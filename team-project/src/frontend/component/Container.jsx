import styled from 'styled-components';
import { useState } from 'react';
import Box from './Box';
import Counter from './Counter';
import { useSpring, animated } from 'react-spring';
const StyledContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 100vh;
    padding: 100px 0;
    // background-color: lightblue;
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
    background-color: white;
    border-radius: 10px;
`;
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 20px;
    column-gap: 20px;
    width: 500px;
`;
let count = 0;

function Container() {
    const questionBox = [
        '질문2',
        '질문3',
        '질문4',
        '질문5',
        '질문6',
        '질문7',
        '질문8',
    ];
    const answerBoxA = ['a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'];
    const answerBoxB = ['b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
    const [question, setQuestion] = useState('질문1');
    const [answerA, setAnswerA] = useState('a1');
    const [answerB, setAnswerB] = useState('b1');
    const [array, setArray] = useState([]);

    const [color, setColor] = useState('none');
    const [isClickA, setIsClickA] = useState(false);
    const [isClickB, setIsClickB] = useState(false);

    const handleAnswerA = () => {
        setArray((prevArray) => [answerA, ...prevArray]);

        // const props = useSpring({
        //     to: { opacity: 0 },
        //     from: { opacity: 1 },
        //     reset: true,
        //     // reverse: isActive,
        //     delay: 200,
        //     // onreset: () => setIsActive(!isActive),
        // });

        setAnswerA(answerBoxA[count]);
        setAnswerB(answerBoxB[count]);
        setQuestion(questionBox[count]);
        setIsClickA(true);
        count++;
        if (count === 8) {
            setAnswerA(answerBoxA[6]);
            setAnswerB(answerBoxB[6]);
            setQuestion(questionBox[6]);
        }
        console.log(array);
    };
    const handleAnswerB = () => {
        setArray((prevArray) => [answerB, ...prevArray]); // setState함수인 setArray는 비동기적으로 작동하기 때문에
        // 상태 업데이트를 한 직후에 상태를 확인할 수 없다. 그래서 다음 버튼 눌렀을 때에야 업데이트 된 상태를 확인가능
        // 값이 들어오긴 함 -> 마지막 8번 누르고 count가 8이되니까 조건문으로 결과보기 버튼 구현할 것.
        // 8번 답 누르면 결과보기 버튼 나오고(8번까지 저장된 상태) , 결과보기 버튼 누르면 그대로 전송 or 결과 계산

        setAnswerA(answerBoxA[count]);
        setAnswerB(answerBoxB[count]);

        setQuestion(questionBox[count]);
        setIsClickB(true);
        count++;
        if (count === 8) {
            setAnswerA(answerBoxA[6]);
            setAnswerB(answerBoxB[6]);
            setQuestion(questionBox[6]);
        }
        console.log(array);
    };
    return (
        <div>
            <StyledContainer className="container">
                <Wrapper className="wrapper">
                    <Counter style={{ backgroundColor: color }} />
                    <QBox className="box_question">
                        <div>{question}</div>
                    </QBox>
                    <Grid>
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
                    {count === 8 ? (
                        <div
                            style={{
                                width: 500,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <button
                                style={{
                                    width: 200,
                                    height: 50,
                                }}
                            >
                                결과보기
                            </button>
                        </div>
                    ) : (
                        ''
                    )}
                </Wrapper>
            </StyledContainer>
        </div>
    );
}
export default Container;
