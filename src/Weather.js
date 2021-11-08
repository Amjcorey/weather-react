import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search City"
              className="form-control" />
          </div>
          <div className="col-3">
            <input
              type="submit"
              placeholder="Search"
              className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Seattle</h1>
      <ul>
        <li>Sunday 07:00</li>
        <li>Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="rain"
          />
          42°F
        </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 86%</li>
          <li>Wind: 9 mph</li>
          <li>Humidity: 88%</li>
        </ul>
      </div>
     </div>
    </div>
  );
}