import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">

          <WeatherApp defaultCity="Seattle" />

        </div>
      </div>
      <footer>
        Coded by Amanda Corey,{" "}
        <a
          rel="noopener noreferrer"
          href="https://github.com/Amjcorey/weather-react" target="_blank">
          open-sourced
        </a>{" "}
        on GitHub.
      </footer>
    </div>
    );
}