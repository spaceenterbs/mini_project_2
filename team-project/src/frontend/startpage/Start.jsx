import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledEntire = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    // background-color: white;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`;

const MiddleBox = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StoryBox = styled.div`
    width: 400px;
    @media screen and (max-width: 780px) {
        width: 360px;
    }
    margin-bottom: 160px;
    font-family: 'SangSangFlowerRoad';
    font-size: 60px;
    font-weight: 700;
    color: #f0f8ff;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    &:hover {
        background-color: #3a365b;
        color: white;
    }
    all: unset;
    border-radius: 10px;
    width: 130px;
    height: 50px;
    color: #f0f8ff;
    text-align: center;
    border: 2px solid #f0f8ff;
    font-family: 'SangSangFlowerRoad';
    font-size: 33px;
    // font-weight: 700;
    margin-bottom: 20px;
    z-index: 999;
`;

const Bottom = styled.div`
    border: transparent;
    position: absolute;
    bottom: 0;
`;

function Start(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/container');
    };
    return (
        <div>
            <StyledEntire className="entire">
                <MiddleBox className="middle">
                    <StoryBox className="story">
                        <div>나를 찾아주는 소품샵</div>
                    </StoryBox>

                    <Button onClick={handleClick}>입장하기</Button>
                </MiddleBox>

                <Bottom className="cloud">
                    <img
                        alt=""
                        src="https://static.vecteezy.com/system/resources/previews/009/374/897/original/fog-design-clean-alpha-free-png.png"
                        style={{ height: '500px', width: '100vw', zIndex: -2 }}
                    />
                </Bottom>
            </StyledEntire>
        </div>
    );
}
export default Start;
