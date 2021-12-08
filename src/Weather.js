import React from "react";
import "./index.js";
import "./index.css";
import "./App.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <div className="row">
            <div className="col-9">
              <form className="mb-3" />
              <input
                type="search"
                placeHolder="Enter a city..."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
          <div className="overview">
            <h1>Tokyo, Japan</h1>
            <ul>
              <li>Last updated: Sunday 15:30</li>
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
          </div>
        </div>
      </div>
    </div>
  );
}

