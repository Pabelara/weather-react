import React, { useState } from "react";
import axios from "axios";
import WeeklyForecastDay from "./WeeklyForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div>
        <h5 className="WeeklyForecast">Next 5 Days</h5>
        <div className="row">
          <div className="col-2 forecast">
            <WeeklyForecastDay data={forecast[0]} />
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
