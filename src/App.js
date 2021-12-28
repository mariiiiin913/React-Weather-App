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
           Coded by <a
              href="https://www.linkedin.com/in/marin-rei-70260690/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marin Rei
            </a>, and {""}
            <a
              href="https://github.com/mariiiiin913/weather-react-marin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            {""} on Github.
            </footer>
          </div>
      </div>
    </div>
  );
}

export default App;
