import React, { useState } from "react";
import ForecastDays from "./ForecastDays";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecastData, setForecastData] = useState(null);

	function handleResponse(response) {
		setForecastData(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecastData.map(function (dailyForecast, index) {
						if (index < 6) {
							return (
								<div className="col" key={index}>
									<ForecastDays data={dailyForecast} />
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	} else {
		let apiKey = "70de72ce25d0801c193edd1d17ced422";
		let latitude = props.coordinates.lat;
		let longitude = props.coordinates.lon;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);

		return null;
	}
}
