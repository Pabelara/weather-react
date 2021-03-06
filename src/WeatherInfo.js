import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import RealFeeling from "./RealFeeling";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <div className="offset-2 col-sm-7 d-flex justify-content-center">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
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
        <RealFeeling celsius={props.data.realFeeling} />
      </div>
      <hr className="hr" />
    </div>
  );
}
