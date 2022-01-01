import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const[loaded, setLoaded]= useState(false);
    const[forecast, setForecastData]= useState(null);

    useEffect(()=>{
      setLoaded(false);
    },[props.coordinates]);

    function handleResponse(response){
        console.log(response.data);
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
      return(
        <div className="weather-forecast">
                <div className="row">
                  {forecast.map(function(dailyforecast, index){
                    if(index < 6){
                    return(
                    <div className="col-2" key={index}>
                    <WeatherForecastDay data={dailyforecast}/>
                 </div>
                    );
                    }
                  })}      
        </div>
      </div>
      );

    }else{
    
      let apiKey="93032777a0ea3ff06e3d56ac2a07c202";
      let longitude= props.coordinates.lon;
      let latitude= props.coordinates.lat;
      let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
  
      return null;
  }
}