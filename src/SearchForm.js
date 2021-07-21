export default function SearchForm() {
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
    </form>
  );
}
