import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="citySearch">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              value="Search City"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="📍"
              className="btn btn-info"
            />
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Sunday 07:00</li>
      </ul>
      <div class="container">

        <div className="row ">
          <div className="col weather_icon">
            <h4>Rain</h4>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="Rain"
            />
            <span className="temperature">42</span>
            <span className="unit">°F</span>
          </div>
          <div className="col moon_img">
                  <img 
                  src="https://www.moongiant.com/images/today_phase/moon_day_WaxC_25.jpg" 
                  className="moon_img"
                  alt="Waxing Cresent" 
                  />
          </div>
          <div className="col">
            <ul>
              <li>Precipitation: 86%</li>
              <li>Wind: 9 mph</li>
              <li>Humidity: 88%</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}