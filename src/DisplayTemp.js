import React from "react";

export default function DisplayTemp() {
    return (
    <div>
 <div className="WeatherTemp">
            <span className="temperature">{props.data.main.temp}</span>
            <span className="unit">°C</span>
          </div>
    </div>
    );
}