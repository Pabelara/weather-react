import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="offset-2 col-sm-7 d-flex justify-content-center">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="icon"
            id="icon"
          />
          <p className="description">{props.data.description}</p>
        </div>
      </div>
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="row">
        <div className=" col-6"></div>
        <div className=" col-6">
          <ul className="attributes">
            <li className="humidity" id="humidity">
              Humidity: {props.data.humidity}%
            </li>
            <li className="wind" id="wind">
              Wind Speed: {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className="realFeeling">
        <ul>
          <li>Real Feeling</li>
          <li className="realTemp" id="realTemp">
            {props.data.realFeeling}ºC
          </li>
        </ul>
      </div>
    </div>
  );
}
