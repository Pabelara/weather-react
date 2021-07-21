export default function WeatherValues() {
  return (
    <div className="row">
      <div className="col">
        <div className="d-flex justify-content-center">
          <div class="temperature" id="temperature">
            13
          </div>
          <div className="d-flex justify-content-start flex-column">
            <span className="degree">
              <a href="#" id="celsius-link" class="active">
                ºC
              </a>
              |
              <a href="#" id="fahrenheit-link">
                ºF
              </a>
            </span>
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
    </div>
  );
}
