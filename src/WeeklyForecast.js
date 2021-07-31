import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeeklyForecast() {
  return (
    <div className="WeeklyForecast">
      <h5>Next 5 Days</h5>
      <div className=" row weatherForecast" id="forecast">
        <div class="col-2">
          Sunday
          <WeatherIcon />
        </div>
        <div class="col-2">Monday</div>
        <div class="col-2">Tuesday</div>
        <div class="col-2">Wednesday</div>
        <div class="col-2">Thursday</div>
      </div>
      <hr />
    </div>
  );
}
