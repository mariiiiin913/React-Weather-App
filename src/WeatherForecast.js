import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const[loaded, setLoaded]= useState(false);
    const[forecast, setForecastData]= useState(null);

    function handleResponse(response){
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
      return(
        <div className="weather-forecast">
                <div className="row">
                 <div className="col-2">
                   <WeatherForecastDay data={forecast[0]}/>
           </div>
        </div>
      </div>
      );

    }else{
    
      let apiKey="ee855ca73a0125cba4455bf043c45c3e";
      let longitude= props.coordinates.lon;
      let latitude= props.coordinates.lat;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
  
      return null;
  }
}