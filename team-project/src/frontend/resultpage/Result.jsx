import React, { useEffect } from 'react';
import styled from 'styled-components';
import Share from '../component/Share';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ENFJ from '../resultimage/ENFJ.PNG';
import ENFP from '../resultimage/ENFP.PNG';
import ENTJ from '../resultimage/ENTJ.PNG';
import ENTP from '../resultimage/ENTP.PNG';
import ESFJ from '../resultimage/ESFJ.PNG';
import ESFP from '../resultimage/ESFP.PNG';
import ESTJ from '../resultimage/ESTJ.PNG';
import ESTP from '../resultimage/ESTP.PNG';
import INFJ from '../resultimage/INFJ.PNG';
import INFP from '../resultimage/INFP.PNG';
import INTJ from '../resultimage/INTJ.PNG';
import INTP from '../resultimage/INTP.PNG';
import ISFJ from '../resultimage/ISFJ.PNG';
import ISFP from '../resultimage/ISFP.PNG';
import ISTJ from '../resultimage/ISTJ.PNG';
import ISTP from '../resultimage/ISTP.PNG';
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
    const [resultImage, setResultImage] = useState();
    const { data } = location.state;
    const explanation = '결과 설명';
    const imageList = [
        { ENFJ: ENFJ },
        { ENFP: ENFP },
        { ENTJ: ENTJ },
        { ENTP: ENTP },
        { ESFJ: ESFJ },
        { ESFP: ESFP },
        { ESTJ: ESTJ },
        { ESTP: ESTP },
        { INFJ: INFJ },
        { INFP: INFP },
        { INTJ: INTJ },
        { INTP: INTP },
        { ISFJ: ISFJ },
        { ISFP: ISFP },
        { ISTJ: ISTJ },
        { ISTP: ISTP },
    ];
    useEffect(() => {
        for (let i = 0; i < imageList.length; i++) {
            if (Object.keys(imageList[i])[0] === data) {
                setResultImage(Object.values(imageList[i])[0]);
            }
        }
    }, [resultImage]);

    //이미지 여기에 다 담고, Container에서 넘어온 data의 값에 따라
    //이미지, 설명 다 달라지게 구현예정
    //일단 임시로 넣어놓은 텍스트라 다 지울 것.
    return (
        <div>
            <StyledResult className="result">
                <LastBox className="last">
                    <TadaBox className="tada">
                        {/* {data} */}
                        <div>
                            <img
                                style={{ width: '300px', height: '250px' }}
                                alt=""
                                src={resultImage}
                            />
                        </div>
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
