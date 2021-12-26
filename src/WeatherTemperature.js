import React,{ useState } from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]=useState("celsius");
    
    function showFahrenheit(event){
     event.preventDefault();
     setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return  (props.celsius * 9/5)+32;
    }

    if (unit==='celsius'){
    return(
    <div className="weatherTemperature">
        <span className="temp"> {Math.round(props.celsius)} </span>{" "}
        <span class="unit">
        ℃ |{""} 
        <a href="/" onClick={showFahrenheit}>{""}℉ </a>
    </span>
  </div>
    );
}else{

    return(
    <div className="weatherTemperature">
        <span className="temp"> {Math.round(fahrenheit())} </span>{" "}
        <span class="unit">
        <a href="/" on onClick={showCelsius}> ℃ </a>|{""}℉ 
    </span>
  </div>
  );
    }
}