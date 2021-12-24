import React from "react";

export default function WeatherInfo(){
    return (
    <div className="WeatherInfo">
    <h1>{weatherData.city}, {weatherData.country}</h1>
    <ul>
      <li>
        <FormattedDate date={weatherData.date} />
        </li>
      <li>{weatherData.description}</li>
    </ul>
  <div className="row">
    <div className="col-6">
      <div className="clearfix weather-temperature">
      <img src= {weatherData.iconUrl}
      className="main-weather-icon"
     alt= {weatherData.description}
     width="100"
     />
        <div className="float-left">
          <span className="temp"> {Math.round(weatherData.temperature)} </span>{" "}
          <span class="units">
            <a href="/"> ℃ </a> | <a href="/"> ℉ </a>
          </span>
        </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {Math.round(weatherData.humidity)} %</li>
        <li>Wind: {Math.round(weatherData.wind)} km/h</li>
        <li>Precipitation: 20 %</li>
      </ul>
    </div>
    </div>
    </div>
    );
}