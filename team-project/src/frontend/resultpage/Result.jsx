import React from 'react';
import styled from 'styled-components';
import Share from '../component/Share';
import { useLocation } from 'react-router-dom';
const StyledResult = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;
const LastBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    // border: 1px solid black;
    margin: 0 auto;
    max-width: 1200px;
`;
const TadaBox = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 30px;
    background-color: beige;
    border-radius: 10px;
`;
const TextBox = styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-bottom: 50px;
    padding: 30px;
    background-color: beige;
    border-radius: 10px;
`;
function Result(props) {
    const location = useLocation();
    const { data } = location.state;
    const explanation = '결과 설명';
    const image = '이미지';
    //이미지 여기에 다 담고, Container에서 넘어온 data의 값에 따라
    //이미지, 설명 다 달라지게 구현예정
    //일단 임시로 넣어놓은 텍스트라 다 지울 것.
    return (
        <div>
            <StyledResult className="result">
                <LastBox className="last">
                    <TadaBox className="tada">
                        {data} {image}
                    </TadaBox>
                    <TextBox className="text">
                        {explanation}
                        <Share />
                    </TextBox>
                </LastBox>
            </StyledResult>
        </div>
    );
}

export default Result;
