import React,{useState} from "react";
import Search from "./Search";
import axios from "axios";

import "./index.js";
import "./index.css";
import "./App.css";
import "./App.js";
import "./Weather.css";
import "./Search.css";


export default function Weather() {
  const [weatherData,setWeatherData]=useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: "Sunday 15:30",
      iconUrl:`http://openweathermap.org/img/wn/01d@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  if (weatherData.ready){
      return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
              <Search />
              <div className="overview">
                <h1>{weatherData.city}, {weatherData.country}</h1>
                <ul>
                  <li>Last updated: {weatherData.date}</li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
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
    }else{
      const apiKey="ee855ca73a0125cba4455bf043c45c3e";
      let city="Tokyo";
      let country="Japan";
      let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading..."
    }
  }
    