import React from "react";
import axios from "axios";

export default function Weather(props){
 function handleResponse(response){
    alert(
     `The weather in ${response.data.name} is 
      ${response.data.main.temp}°C`
     );
    }
    let apiKey= "42ef142def142e37f3591de51015042b";
    let unit= "metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from react</h2>;
}
