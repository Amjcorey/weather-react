import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="card">
        <div className="date-time">
          <div className="date">Sunday</div>
          <div className="time">12:00 AM </div>
        </div>
        <div className="WeatherInfo">
          <div className="row">
            <h2>Mostly Cloudy</h2>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly cloudy"
            />
            <h1>Seattle</h1>
            <div className="temperature-container">
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
            className="form-control-search"
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
    </div>
  );
}