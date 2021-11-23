import React from "react";

export default function DisplayTemp(props) {
	return (
		<div className="WeatherTemp">
			<span className="temperature">{Math.round(props.celsius)}</span>

			<span className="unit">
				°
				<a href="noopener" className="celsius-unit">
					C
				</a>
			</span>
		</div>
	);
}
