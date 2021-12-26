import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey="ee855ca73a0125cba4455bf043c45c3e";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="weather-forecast">
                <div className="row">
                 <div className="col-2">
                 <div className="weather-forecast-day">
                 Mon
                 <br /> 
                 <WeatherIcon code="01d" size={36} />
                 </div>
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
    )
}