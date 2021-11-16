import React from "react";
import WeatherIcon from "./WeatherIcon";
import FriendlyDate from "./FriendlyDate";
import DisplayTemp from "./DisplayTemp";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentDate">
          <FriendlyDate date={props.data.date} />
      </div>
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6">
          < WeatherIcon code={props.data.icon} alt={props.data.description} size={52} />
          <h4>{props.data.description}</h4>
        </div>
        <div className="col-6">
          <DisplayTemp celsius={props.data.temperature} />
        </div>
        <hr />
        <div className="WeatherDetails">
        <div className="row">
            <div className="col-4">
              Humidity: {props.data.humidity}%
            </div>
            <div className="col-4">
              Wind: {props.data.wind} km/h
            </div>
            <div className="col-4">
              <span className="MoonPhase">Moon</span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}