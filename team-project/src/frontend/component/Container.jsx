import styled from 'styled-components';
import { useState } from 'react';
import Box from './Box';
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
function Container(props) {
    const answerBoxA = ['a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'];
    const answerBoxB = ['b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
    const answerBoxC = ['c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
    const answerBoxD = ['d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'];
    const [answerA, setAnswerA] = useState('a1');
    const [answerB, setAnswerB] = useState('b2');
    const [answerC, setAnswerC] = useState('c3');
    const [answerD, setAnswerD] = useState('d4');

    const handleAnswer = () => {
        setAnswerA(answerBoxA[count]);
        setAnswerB(answerBoxB[count]);
        setAnswerC(answerBoxC[count]);
        setAnswerD(answerBoxD[count]);
        count++;
    };
    return (
        <div>
            <StyledContainer className="container">
                <Wrapper className="wrapper">
                    <QBox className="box_question">
                        <div>질문 입력란입니다</div>
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
                        <Box
                            className="box_answer_3"
                            handleClick={handleAnswer}
                            text={answerC}
                        />
                        <Box
                            className="box_answer_4"
                            handleClick={handleAnswer}
                            text={answerD}
                        />
                    </Grid>
                </Wrapper>
            </StyledContainer>
        </div>
    );
}
export default Container;
