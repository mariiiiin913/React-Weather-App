import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather />
    <App />
    </StrictMode>,
  rootElement
);

