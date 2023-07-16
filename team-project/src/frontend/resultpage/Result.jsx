import React, { useEffect } from 'react';
import styled from 'styled-components';
import Share from '../component/Share';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../component/Progress.css';
import '../resultpage/Result.css';
import ENFJ from '../zzinresultimage/ENFJ.PNG';
import ENFP from '../zzinresultimage/ENFP.PNG';
import ENTJ from '../zzinresultimage/ENTJ.PNG';
import ENTP from '../zzinresultimage/ENTP.PNG';
import ESFJ from '../zzinresultimage/ESFJ.PNG';
import ESFP from '../zzinresultimage/ESFP.PNG';
import ESTJ from '../zzinresultimage/ESTJ.PNG';
import ESTP from '../zzinresultimage/ESTP.PNG';
import INFJ from '../zzinresultimage/INFJ.PNG';
import INFP from '../zzinresultimage/INFP.PNG';
import INTJ from '../zzinresultimage/INTJ.PNG';
import INTP from '../zzinresultimage/INTP.PNG';
import ISFJ from '../zzinresultimage/ISFJ.PNG';
import ISFP from '../zzinresultimage/ISFP.PNG';
import ISTJ from '../zzinresultimage/ISTJ.PNG';
import ISTP from '../zzinresultimage/ISTP.PNG';
const StyledResult = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    // background-color: #4c200b;
    display: flex;
    justify-content: center;
    // margin: 0 auto;
`;
const LastBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    // border: 1px solid black;
    // margin: 0 auto;
    // max-width: 1200px;
`;
const TadaBox = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-family: 'UhBeemysen';
    font-size: 35px;
    color: #4c200b;
    font-weight: 700;
    padding: 20px 30px 0 30px;
    background-color: #fffaf0;
    border-radius: 10px;
    margin: 0 auto 40px auto;
    @media screen and (max-width: 768px) {
        width: 400px;
    }
    word-break: keep-all;
    white-space: pre-line;
`;
const TextBox = styled.div`
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    justify-content: center;
    font-family: 'UhBeemysen';
    padding: 30px;
    background-color: #fffaf0;
    border-radius: 10px;
    margin: 0 auto 50px auto;
    @media screen and (max-width: 768px) {
        width: 400px;
    }
    word-break: keep-all;
    white-space: pre-line;
`;
function Result(props) {
    const location = useLocation();
    const [resultImage, setResultImage] = useState();
    const [resultExplanation, setResultExplanation] = useState();
    const { data } = location.state;
    const explanation = [
        '사려도 깊고 남을 챙겨주기 좋아하는 당신! 리더의 기질을 가지고 있어서 믿음직스럽기도 하고, 순수한 영혼을 가지고 있어서 사람들과 어울리는데 어려움이 없어보여요!',
        '아이디어가 많은 당신! 밝고 높은 텐션으로 분위기를 쾌활하게 해주네요! 감수성도 많고, 생각도 많은 순수한 영혼의 소유자입니다! 에너지가 통제가 잘 안될 때도 있어서 시끄럽다는 얘기를 종종 들을 때도 있지만,  발랄하고 유연하기 때문에 주변에 사람들이 가득해요!',
        '내가 짱이다라는 생각을 해본 적이 있나요? 당신은 리더의 기질이 강해서 차가워보인다는 소리를 들어본 적이 있을 것이에요! 하지만 숨어있는 따듯함을 지닌 사람이네요!',
        '쾌활하고 자유로운 영혼을 가진 당신! 개방적이긴 하지만 직설적이고 거침없게 말해서 카리스마가 있다는 소리를 들어본 적이 있을 것 같아요! 지적호기심도 많고 어려운 문제를 즐겨서인지 아이디어가 넘쳐나는 사람이네요!',
        '밝고 높은 텐션을 가진 당신은 항상 바쁜 일정을 가지고 있어요! 마냥 밝기만 한 게 아니라 꼼꼼하고 믿음직스럽기도 해서 주변에 사람들이 늘 많아요!',
        '붙임성이 좋은 당신! 긍정적이고 발랄한 에너지로 주위 사람들을 기분 좋게 해줘요! 부드럽고 유연한 성격이지만 새로운 자극을 추구하기도 한답니다!',
        '항상 바쁜 일정을 가지고 있는 당신! 숨어있는 따뜻함 때문에 주위에 사람이 많아요! 현실적이며 꼼꼼한 당신은 안정적인 삶을 중시하는 것 같아요!',
        '붙임성은 좋지만 거침없는 당신! 쾌활하고 자유로워서 사람들과 잘 어울리지만 지나치게 솔직해서 주변에서 머쓱할 때도 있네요!',
        '혼자 뭔가 부지런히 하고 있는 당신! 다른 사람들을 잘 챙겨주고 믿음직스러운 면모가 있어요! 섬세한 감정을 가지고 있어서 내적 갈등을 많이 겪곤 해요.',
        '속을 알 수 없는 당신! 섬세한 감수성을 가지고 있어서 예술적인 면모를 발휘할 때가 많아요.  발랄하고 부드러운 성격을 가지고 있어서 사람들과 있을 때 예쁨을 많이 받지만, 집에 가고 싶은 마음이 많이 있을 것 같아요..ㅎㅎ',
        '겉으로 보기엔 차가운 당신! 하지만 숨어있는 따듯함으로 주변 사람들을 감동시키곤 해요. 사람들과 같이 하는 것보다는 혼자 부지런히 지적 호기심을 충족시키곤 하죠! 텐션이 높은 편은 아니지만 리더의 역할을 해야할 때 칼같이 잘 해내요!',
        '직설적인 당신! 텐션이 그렇게 높지는 않지만 지적 호기심만큼은 그 누구보다 높아요! 대화를 할 때 머리에서 물음표가 난무해서 통제가 불가능할 때가 있어요. 사람들을 만나는 것보다 집에서 어려운 문제들을 해결해나갈 때 더 희열을 느끼는 것 같아요!',
        '차분하고 어른스러운 당신! 다른 사람을 잘 챙겨주고 잘 어울리지만, 사실은 혼자 뭔가 하는 것을 더 선호하는 편이에요! 사람들과 있을 때 잘 융화되고, 사람들의 고민에 현실적인 조언을 주곤 하네요!',
        '집에서 잘 안나오고 싶어하는 당신! 그럼에도 한번 집에서 나오면 부드럽고 유연한 성격 때문인지 사람들과 잘 웅화되는 모습이 보여요! 표현 방법이 적극적이진 않지만 리액션을 참 잘해줘요!',
        '효율을 중요시하는 당신! 주변을 객관적으로 분석하고 사실에 입각하여 현실적으로 실행 가능한 계획을 세우는 것을 선호하는 것 같아요! 겉으로 튀는 것을 별로 좋아하지 않아서 \n차가운 인상을 주곤 해요.',
        '필요에 따라 사교적인 당신! 타인의 일에는 무관심한 편이라 관심분야가 아니면 쳐다 보지도 않아요. 아마 생각은 적극적이지만 행동은 소극적일 수도 있는 사람이네요!',
    ];
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
                setResultExplanation(explanation[i]);
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
                    <div style={{ marginBottom: '20px' }}>
                        <div class="border"></div>
                        <div
                            class="galands"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <div class="g1 basic"></div>
                            <div class="g2 basic"></div>
                            <div class="g3 basic"></div>
                            <div class="g4 basic"></div>
                            <div class="g5 basic"></div>
                            <div class="g6 basic"></div>
                            <div class="g7 basic"></div>
                            <div class="g8 basic"></div>
                            <div class="g9 basic"></div>
                            <div class="g10 basic"></div>
                            <div class="g11 basic"></div>
                            <div class="g12 basic"></div>
                        </div>
                    </div>
                    <TadaBox className="tada">
                        {/* {data} */}
                        <div>
                            <p style={{ marginBottom: '5px' }}>
                                당신의 인형을 데려가세요!
                            </p>
                        </div>
                        <div>
                            <img
                                style={{
                                    width: '250px',
                                    height: '200px',
                                }}
                                alt=""
                                src={resultImage}
                            />
                        </div>
                    </TadaBox>
                    <TextBox className="text">{resultExplanation}</TextBox>
                    <Share />
                </LastBox>
            </StyledResult>
        </div>
    );
}

export default Result;
