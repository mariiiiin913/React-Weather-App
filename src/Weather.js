import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./index.js";
import "./index.css";
import "./App.css";
import "./App.js";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData,setWeatherData]=useState({ready: false});
  const [city,setCity]=useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

    function search(){
      const apiKey="ee855ca73a0125cba4455bf043c45c3e";
      let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }    

    function handleSubmit(event) {
      event.preventDefault();
      search();
      ///search...
    }

    function updateCity(event){
      setCity(event.target.value);
    }


  if (weatherData.ready){
      return (
        <div className="Weather">
          <div className="container">
            <div className="weather-app">
            <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
              <input
                type="search"
                placeHolder="Enter a city..." 
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-2">
            <input class="btn btn btn-outline-warning location" type="button" 
            value=" 📍" />
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
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
      search();
      return "Loading..."
    }
  }
    