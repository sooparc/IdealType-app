import "./App.css";
import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import Home from "./Page/Home";
import MaleIdols from "./Page/MaleIdols";
import MaleFastMode from "./Page/MaleFastMode";
import FemaleIdols from "./Page/FemaleIdols";
import FemaleFastMode from "./Page/FemaleFastMode";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/maleidols" exact>
        <MaleIdols />
      </Route>

      <Route path="/malefastmode" exact>
        <MaleFastMode />
      </Route>

      <Route path="/femaleidols" exact>
        <FemaleIdols />
      </Route>

      <Route path="/femalefastmode" exact>
        <FemaleFastMode />
      </Route>
    </>
  );
}

export default App;
