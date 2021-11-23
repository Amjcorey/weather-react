import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDays(props) {
	function maxTemp() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}°`;
	}

	function minTemp() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}°`;
	}

	function ForecastDays() {
		let date = new Date(props.data.dt * 1000);
		ForecastDays = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

		return days[ForecastDays];
	}

	return (
		<div>
			<div className="WeatherForecast-day">{ForecastDays()}</div>
			<WeatherIcon
				code={props.data.weather[0].icon}
				size={36}
				color="#668a8a"
			/>
			<div className="WeatherForecast-temperature">
				<span className="WeatherForecast-temperature-max">{maxTemp()}</span> |{" "}
				<span className="WeatherForecast-temperature-min">{minTemp()}</span>
			</div>
		</div>
	);
}
