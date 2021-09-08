import React from "react";
import "./App.css";
import Weather from "./SearchForm";
import Credits from "./Credits";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherApp">
          <Weather defaultCity="Madrid" />
          <br />

          <Credits />
        </div>
      </div>
    </div>
  );
}
