import React from "react";
// import axios from "axios";
import "./Weather.css";



export default function Weather() {

  


  
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
            />
            </div>
            <h2>Light rain showers</h2>
            <div className="WeatherTemp">
              <span className="temperature">46</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <form>
          <div className="d-flex flex-column"> 
          <div className="p-2">
          <input
            type="search"
            value="i.e. Seattle"
            className="form-control input-search"
          />
          </div>
          <div className="p-2">
          <input
            type="submit"
            value="Search city"
            className="btn btn-primary"
          />
          </div>
          </div>
        </form>
      
    </div>
  );
} 
