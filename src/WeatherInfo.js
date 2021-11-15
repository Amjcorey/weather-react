import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">

      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          < WeatherIcon code={props.data.icon} size={52} />
          <h4>{props.data.description}</h4>
        </div>
        <div className="col-6">
          <div className="WeatherTemp">
            <span className="temperature">46</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div className="WeatherDetails">
              <ul>
                <li>
                  Humidity: {props.data.humidity}%
                </li>
                <li>
                  Wind: {props.data.wind} km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="MoonPhase">
              <span>Moon</span>
              <span>Waxing Gibbous</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}