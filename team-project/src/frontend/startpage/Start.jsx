import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const StyledEntire = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: white;
  display: flex;
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
  margin-bottom: 50px;
`;

const Button = styled.button`
  &:hover {
    background-color: #4c200b;
    color: white;
  }
  all: unset;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  color: #4c200b;
  text-align: center;
  border: 3px solid #4c200b;
  font-family: "UhBeemysen";
  font-size: 30px;
  font-weight: 700;
`;

function Start(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/container");
  };
  return (
    <div>
      <StyledEntire className="entire">
        <MiddleBox className="middle">
          <StoryBox className="story">
            <img
              className="story_img"
              src="/firstpage_smallver.png"
              alt="logo"
            ></img>
          </StoryBox>
          <Button onClick={handleClick}>입장하기</Button>
        </MiddleBox>
      </StyledEntire>
    </div>
  );
}
export default Start;
