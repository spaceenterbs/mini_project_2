import logo from "./logo.svg";
import "./App.css";

import GlobalStyles from "./GlobalStyles"; //전역에 css 적용하는 js 컴포넌트
import { useState, useEffect } from "react";
import Container from "./frontend/component/Container";

function App(props) {
  return (
    <div>
      <GlobalStyles />
      <Container />
    </div>
  );
}

export default App;
