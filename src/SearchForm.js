import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeeklyForecast from "./WeeklyForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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

  function search() {
    let apiKey = "935d274474278d462bed68ee689c049b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="hero">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <input
                type="search"
                placeholder="Search City"
                className="form-control shadow-sm"
                id="searchCity"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
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
          </div>
        </form>
        <br />
        <WeatherInfo data={weatherData} />
        <WeeklyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
