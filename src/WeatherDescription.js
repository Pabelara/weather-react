export default function WeatherDescription() {
  return (
    <div className="row">
      <div
        className="
    offset-2
    col-sm-8
    d-flex
    align-items-center
    justify-content-center
  "
      >
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="Light Rain"
          className="icon"
          id="icon"
        />
        <div className="description" id="description">
          Light Rain
        </div>
      </div>
    </div>
  );
}
