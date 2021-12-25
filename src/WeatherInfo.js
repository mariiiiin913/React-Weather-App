import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
      <li>
        <FormattedDate date={props.data.date} />
        </li>
      <li>{props.data.description}</li>
    </ul>
  <div className="row">
    <div className="col-6">
      <div className="clearfix weather-temperature">
      <img src= {props.data.iconUrl}
      className="main-weather-icon"
     alt= {props.data.description}
     width="100"
     />
        <div className="float-left">
          <span className="temp"> {Math.round(props.data.temperature)} </span>{" "}
          <span class="units">
            <a href="/"> ℃ {""} </a>|<a href="/">{""}℉ </a>
          </span>
        </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {Math.round(props.data.humidity)} %</li>
        <li>Wind: {Math.round(props.data.wind)} km/h</li>
        <li>Precipitation: 20 %</li>
      </ul>
    </div>
    </div>
    </div>
    );
}