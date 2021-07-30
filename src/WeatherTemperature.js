import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-7 temperature">{props.celsius}</div>
          <div className=" col-5">
            <span className="degree">
              ºC|
              <a href="/" onClick={showFahrenheit} className="active">
                ºF
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <div className="col-7 temperature">{fahrenheit}</div>
          <div className=" col-5">
            <span className="degree">
              <a href="/" onClick={showCelsius} className="active">
                ºC
              </a>
              |ºF
            </span>
          </div>
        </div>
      </div>
    );
  }
}
