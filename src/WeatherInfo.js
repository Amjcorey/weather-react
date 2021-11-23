import React from "react";
import WeatherIcon from "./WeatherIcon";
import DisplayTemp from "./DisplayTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			<h1>{props.data.city}</h1>
			<div className="row">
				<div className="col-6">
					<WeatherIcon
						code={props.data.icon}
						alt={props.data.description}
						size={props.data.size}
					/>
					<p className="current-icon-description">{props.data.description}</p>
				</div>
				<div className="col-6">
					<DisplayTemp celsius={props.data.temperature} />
				</div>
				<hr />
				<div className="circle"></div>
				<div className="WeatherDetails">
					<div className="row">
						<div className="col-4">Humidity: {props.data.humidity}%</div>
						<div className="col-4">Wind: {props.data.wind} km/h</div>
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
