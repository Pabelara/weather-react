export default function WeatherValues() {
  return (
    <div>
      <div className="row">
        <div className="offset-2 col-sm-7 d-flex justify-content-center">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="Light Rain"
            className="icon"
            id="icon"
          />
          <p className="description">Light Rain</p>
        </div>
      </div>
      <div className="row">
        <div className="col-7 temperature">13</div>
        <div className=" col-5">
          <span className="degree">ºC | ºF</span>
          <ul className="attributes">
            <li className="humidity" id="humidity">
              Humidity: 40%
            </li>
            <li className="wind" id="wind">
              Wind Speed: 8 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
