import React from 'react';
import styled from 'styled-components';
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
    background-color: yellow;
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
    background-color: yellow;
    border-radius: 10px;
`;
function Result(props) {
    const location = useLocation();
    const { data } = location.state;

    return (
        <div>
            <StyledResult className="result">
                <LastBox className="last">
                    <TadaBox className="tada">{data}</TadaBox>
                    <TextBox className="text">
                        이렇게 하는게 맞는건지 1도 몰으겠습니다.<br></br>
                        난리난리 난리나<br></br>
                        br태그 왜이래 원래 저렇게 써야지 쓰이는건가<br></br>
                        춥고 졸린 저는 거지인가요..?<br></br>
                    </TextBox>
                </LastBox>
            </StyledResult>
        </div>
    );
}

export default Result;
