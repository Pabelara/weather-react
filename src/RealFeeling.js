import React, { useState } from "react";

export default function RealFeeling(props) {
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
      <div className="RealFeeling">
        <ul>
          <li>Real Feeling</li>
          <li className="realTemp" id="realTemp">
            {props.celsius} ºC|
            <a href="/" onClick={showFahrenheit} className="active">
              ºF
            </a>
          </li>
        </ul>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="RealFeeling">
        <ul>
          <li>Real Feeling</li>
          <li className="realTemp" id="realTemp">
            {fahrenheit} {""}
            <a href="/" onClick={showCelsius} className="active">
              ºC
            </a>
            |ºF
          </li>
        </ul>
      </div>
    );
  }
}
