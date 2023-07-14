import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const StyledEntire = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;
const MiddleBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    // border: 1px solid black;
    margin: 0 auto;
    max-width: 1200px;
`;
const StoryBox = styled.div`
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
const Button = styled.button`
    &:hover {
        background-color: #ffcc66;
    }
    all: unset;
    border-radius: 10px;
    height: 100px;
    width: 480px;
    padding: 0 10px;
    text-align: center;
    margin-bottom: 20px;
    background-color: yellow;
`;
function Start(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/container');
    }
    return (
        <div>
            <StyledEntire className="entire">
                <MiddleBox className="middle">
                    <StoryBox className="story">스토리 시작 주저리주저리</StoryBox>
                    <Button onClick={handleClick}>시작하기</Button>
                </MiddleBox>
            </StyledEntire>
        </div>
    );
}
export default Start;