import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";




export default function Weather(props) {
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ ready: false });



function handleResponse(response) {
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,

  })
}

/* function to search a city */
function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityDisplay(event) {
  //triggered by input button element or pressing Enter to search a city
  setCity(event.target.value)
}
  /* pressing Enter or clicking Search button triggers function to get the weather data for the searched city using the OpenWeather API */
function search() {
  const apiKey = "70de72ce25d0801c193edd1d17ced422";

  let units = "metric";
  let apiUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
}

  
  return (
    <div className="Weather">
      
        <div className="date-time">
          <ul>
            <li>
            <div>Sunday 12:00 AM</div>
            </li>
          </ul>
          
        </div>
        <div className="WeatherInfo">
          <div className="row">
          <h1>Seattle</h1>
            <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="Light rain showers"
              size={52}
            />
            </div>
            <h2>Light rain showers</h2>
            <div className="WeatherTemp">
              <span className="temperature">46</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="i.e. Seattle"
              className="form-control"
              onChange={handleCityDisplay}
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      
    </div>
  );
} 
