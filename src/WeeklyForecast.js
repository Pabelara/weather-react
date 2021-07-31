import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <h5 className="WeeklyForecast">Next 5 Days</h5>
        <div className="row">
          <div className="col-2 forecast">
            <WeeklyForecastDay data={forecast[0]} />
          </div>
          <div className="col-2 forecast">
            <div className="ForecastDay">{forecast[1].dt}</div>
            <WeatherIcon code="01d" />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {" "}
                {Math.round(forecast[1].temp.max)}º /{" "}
              </span>
              <span className="MinTemperature">
                {Math.round(forecast[1].temp.min)}º
              </span>
            </div>
          </div>
          <div className="col-2 forecast">
            <div className="ForecastDay">{forecast[2].dt}</div>
            <WeatherIcon code="03d" />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast[2].temp.max)}º /{" "}
              </span>
              <span className="MinTemperature">
                {" "}
                {Math.round(forecast[2].temp.min)}º
              </span>
            </div>
          </div>
          <div className="col-2 forecast">
            <div className="ForecastDay">{forecast[3].dt}</div>
            <WeatherIcon code="11d" />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast[3].temp.max)}º /{" "}
              </span>
              <span className="MinTemperature">
                {" "}
                {Math.round(forecast[3].temp.min)}º
              </span>
            </div>
          </div>
          <div className="col-2 forecast">
            <div className="ForecastDay">{forecast[4].dt}</div>
            <WeatherIcon code="09d" />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast[4].temp.max)}º /{" "}
              </span>
              <span className="MinTemperature">
                {Math.round(forecast[4].temp.min)}º
              </span>
            </div>
          </div>
          <div className="col-2 forecast">
            <div className="ForecastDay">{forecast[5].dt}</div>
            <WeatherIcon code="50d" />
            <div className="ForecastTemperature">
              <span className="MaxTemperature">
                {Math.round(forecast[5].temp.max)}º /{" "}
              </span>
              <span className="MinTemperature">
                {Math.round(forecast[5].temp.min)}º
              </span>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
    );
  } else {
    let apiKey = "935d274474278d462bed68ee689c049b";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
