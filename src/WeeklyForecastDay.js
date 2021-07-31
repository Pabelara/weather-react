import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="ForecastTemperature">
        <span className="MaxTemperature">{maxTemperature()} / </span>
        <span className="MinTemperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
