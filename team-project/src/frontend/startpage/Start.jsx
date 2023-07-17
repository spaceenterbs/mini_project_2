import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  margin-bottom: 100px;
  font-family: "SangSangFlowerRoad";
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
  font-family: "SangSangFlowerRoad";
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
const Join = styled.div`
  margin-bottom: 5px;
  font-family: "SangSangFlowerRoad";
  color: #f0f8ff;
  font-size: 28px;
`;
const JoinNum = styled.div`
  margin-bottom: 20px;
  font-family: "SangSangFlowerRoad";
  color: #f0f8ff;
  font-size: 35px;
`;
function Start(props) {
  const navigate = useNavigate();
  const [joinCount, setJoinCount] = useState(0);
  axios
    .get("https://shsm2ndproject.onrender.com/api/v1/mbti_get/count/")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.count);
      setJoinCount(res.data.count);
    });
  const handleClick = () => {
    navigate("/container");
  };
  return (
    <div>
      <StyledEntire className="entire">
        <MiddleBox className="middle">
          <StoryBox className="story">
            <div style={{}}>나를 찾아주는 소품샵</div>
          </StoryBox>
          <Join>참여자 수</Join>
          <JoinNum>{joinCount}</JoinNum>
          <Button onClick={handleClick}>입장하기</Button>
        </MiddleBox>
        <Bottom className="cloud">
          <img
            alt=""
            src="https://static.vecteezy.com/system/resources/previews/009/374/897/original/fog-design-clean-alpha-free-png.png"
            style={{ height: "500px", width: "100vw", zIndex: -2 }}
          />
        </Bottom>
      </StyledEntire>
    </div>
  );
}
export default Start;
