import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import WeatherDescription from "./WeatherDescription";
import WeatherValues from "./WeatherValues";
import RealFeeling from "./RealFeeling";
import DailyForecast from "./DailyForecast";
import WeeklyForecast from "./WeeklyForecast";
import Credits from "./Credits";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp">
          <SearchForm />
          <br />
          <h1 id="city">Madrid</h1>
          <ul>
            <li class="date"></li>
            <li class="time"></li>
          </ul>
          <WeatherDescription />
          <WeatherValues />
          <RealFeeling />
          <DailyForecast />
          <WeeklyForecast />
          <Credits />
        </div>
      </div>
    </div>
  );
}
