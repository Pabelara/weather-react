import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "935d274474278d462bed68ee689c049b";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h5 className="WeeklyForecast">Next 5 Days</h5>
      <div className="row">
        <div className="col-2 forecast">
          <div className="ForecastDay">Sunday</div>
          <WeatherIcon code="01n" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
        <div className="col-2 forecast">
          <div className="ForecastDay">Monday</div>
          <WeatherIcon code="01d" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
        <div className="col-2 forecast">
          <div className="ForecastDay">Tuesday</div>
          <WeatherIcon code="03d" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
        <div className="col-2 forecast">
          <div className="ForecastDay">Wednesday</div>
          <WeatherIcon code="11d" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
        <div className="col-2 forecast">
          <div className="ForecastDay">Thursday</div>
          <WeatherIcon code="09d" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
        <div className="col-2 forecast">
          <div className="ForecastDay">Friday</div>
          <WeatherIcon code="50d" />
          <div className="ForecastTemperature">
            <span className="MaxTemperature">23º / </span>
            <span className="MinTemperature">15º</span>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
