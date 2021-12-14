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
          <div className="row">
              <Search />
          </div>
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
              </ul>
            </div>
            <br />
            <hr />
            <div className="weather-forecast">
            <div className="row">
              <div className="col-2">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="42"
                />
                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max"> 18° </span>
                  <span className="weather-forecast-temperature-min"> 12° </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

