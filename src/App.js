import React from "react";
import Weather from "./Weather";

import "./index.css";
import "./index.js"
import "./App.css";



function App() {
  return (
    <div className="App">
      <Weather defaultCity={"Tokyo"}/>
      <div className="container">
      <div className="weather-app-wrapper">
         <footer className="github-link">
            <a
              href="https://github.com/mariiiiin913/weather-react-marin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            , by Marin Rei
            </footer>
          </div>
      </div>
    </div>
  );
}

export default App;
