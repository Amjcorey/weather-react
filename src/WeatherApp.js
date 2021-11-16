import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";




export default function WeatherApp(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);


function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    city: response.data.name,
    temperature: response.data.main.temp,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    date: new Date(response.data.dt * 1000),
  });
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
  
  let apiUrl = 
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}

  if (weatherData.ready) {
    return (
    <div className="WeatherApp">
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
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
      < WeatherInfo data={weatherData} />
    </div>
  );
  } else {
    search();
    return "Looking outside for you... One second";
  }
  
} 
