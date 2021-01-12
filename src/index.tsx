import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from 'styles/globalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root")
);
