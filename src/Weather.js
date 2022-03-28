import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


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
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

    function search(){
      let apiKey="93032777a0ea3ff06e3d56ac2a07c202";
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

    ///Current Location

    function getPosition(position) {
      let lati = position.coords.latitude;
      let longi = position.coords.longitude;
      let apiKey="93032777a0ea3ff06e3d56ac2a07c202";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(getPosition);
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
             value=" 📍 " onClick={getCurrentPosition}/>
             </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
              <hr />
              <WeatherForecast coordinates={weatherData.coordinates} />
               </div>
             </div>
            </div>
  );
    }else{
      search();
      return "Loading..."
    }
  }
    