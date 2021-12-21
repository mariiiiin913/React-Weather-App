import React from "react";
import Search from "./Search";

import "./index.js";
import "./index.css";
import "./App.css";
import "./App.js";
import "./Weather.css";
import "./Search.css";


export default function Weather() {
  
      return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
              <Search />
              <div className="overview">
                <h1>Tokyo, Japan</h1>
                <ul>
                  <li>Last updated: Sunday 15:30</li>
                  <li>Sunny</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                  <img src="http://openweathermap.org/img/wn/01d@2x.png"
                  className="main-weather-icon"
                 alt="Sun"
                 width="100"
                 />
                    <div className="float-left">
                      <span className="temp"> 26 </span>{" "}
                      <span class="units">
                        <a href="/"> ℃ </a> | <a href="/"> ℉ </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Humidity: 76 %</li>
                    <li>Wind: 31 km/h</li>
                    <li>Precipitation: 20 %</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="weather-forecast">
                <div className="row">
                 <div className="col-2">
                 <div className="weather-forecast-date">
                 Mon
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 />
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                  </div>
                 <div className="col-2">
                 <div className="weather-forecast-date">
                 Tue
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 />
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                  </div>
                  <div className="col-2">
                 <div className="weather-forecast-date">
                 Wed
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 />
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                  </div>
                 <div className="col-2">
                 <div className="weather-forecast-date">
                 Thu
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 />
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                  </div>
                  <div className="col-2">
                 <div className="weather-forecast-date">
                 Fri
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 />
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                  </div>
                 <div className="col-2">
                 <div className="weather-forecast-date">
                 Sat
                 </div>
                 <br />
                 <img src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""
                 width="36"
                 /> 
                 <br />
                 <div className="weather-forecast-temperature">
                   <span className="weather-forecast-temperature-max">
                    18°
                   </span>
                   <span className="weather-forecast-temperature-min">
                     12°
                   </span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
            </div>
          </div>
      );
    }
    