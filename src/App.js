import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
          <Weather />
          </div>
         <footer>
                Coded by Amanda Corey,{" "}
            <a
            rel="noreferrer"
            href="https://github.com/Amjcorey/weather-react" target="_blank">
            open-sourced
            </a>{" "}
            on GitHub.
          </footer>
        </div> 
      </div>
    );
}