import React from "react";
//import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
	/*
	function handleResponse(response) {
		console.log(response.data);
	}

	const apiKey = "70de72ce25d0801c193edd1d17ced422";
	let latitude = 47.61;
	let longitude = -122.33;
	let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiUrl}`;

	axios.get(apiUrl).then(handleResponse);
	*/
	return (
		<div className="WeatherForecast">
			<div className="row">
				<div className="col">
					<div className="WeatherForecast-day">Saturday</div>
					<WeatherIcon code="02n" size={36} />
					<div className="WeatherForecast-Temperature">
						<span className="WeatherForecast-temperature-max">54</span> |{" "}
						<span className="WeatherForecast-temperature-min">39</span>
					</div>
				</div>
			</div>
		</div>
	);
}
