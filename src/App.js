import React, { useState } from "react";
import WeatherGrid from "./components/WeatherGrid";

const api = {
  key: "2da980c4fb683cebfdf8fec7967b250b",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <>
      <header>
        <h2 className="center">Weather App</h2>
        <span className="center">
          <a
            href="https://mako.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"  "}Mako
          </a>
        </span>
      </header>
      <main>
        <div className="section1">
          <div className="search">
            <h6>Your city</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>

          <section className="weatherResults">
            {typeof weather.main != "undefined" ? (
              <WeatherGrid weather={weather} />
            ) : (
              ""
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
