import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      realFeeling: Math.round(response.data.main.feels_like),
    });
  }

  if (weatherData.ready) {
    return (
      <form className="search-form">
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Search City"
              autoFocus="on"
              autoComplete="off"
              id="searchCity"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="submit"
              value="Search"
              id="searchButton"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="submit"
              value="Current"
              id="currentLocationButton"
              className="form-control shadow-sm"
            />
          </div>
        </div>
        <br />
        <h1 id="city">{weatherData.city}</h1>
        <FormattedDate date={weatherData.date} />

        <div className="row">
          <div className="offset-2 col-sm-7 d-flex justify-content-center">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt={weatherData.description}
              className="icon"
              id="icon"
            />
            <p className="description">{weatherData.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-7 temperature">{weatherData.temperature}</div>
          <div className=" col-5">
            <span className="degree">ºC | ºF</span>
            <ul className="attributes">
              <li className="humidity" id="humidity">
                Humidity: {weatherData.humidity}%
              </li>
              <li className="wind" id="wind">
                Wind Speed: {weatherData.wind}km/h
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="realFeeling">
          <ul>
            <li>Real Feeling</li>
            <li className="realTemp" id="realTemp">
              {weatherData.realFeeling}ºC
            </li>
          </ul>
        </div>
      </form>
    );
  } else {
    let apiKey = "935d274474278d462bed68ee689c049b";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
