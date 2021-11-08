import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function WeatherSearch() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);
  const [icon, setIcon] = useState(null);

  function displayCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "70de72ce25d0801c193edd1d17ced422";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setWind(Math.round(response.data.wind.speed));
    setHumidity(response.data.main.humidity);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let form = (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          className="form-control"
          onChange={displayCity}
        />

        <input type="button" value="Search" className="btn btn-primary" />
      </form>
    </div>
  );

  if (temperature) {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        {form}
        <br />
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Description: {description}</li>
          <li>Wind: {wind} km</li>
          <li>Humidity: {humidity}% </li>
          <li>
            <img src={icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Weather App </h1>
        {form}
      </div>
    );
  }
}
