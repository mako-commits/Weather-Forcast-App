import React, { useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import { useEffect } from "react";
import axios from "axios";

//! hide this
const api = {
  key: "2da980c4fb683cebfdf8fec7967b250b",
  base: "https://api.openweathermap.org/data/2.5/",
};
// const api_key = process.env.API_KEY;
function App() {
  const [weatherForecast, setWeatherForcast] = useState({});
  const [cityName, setCityName] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //fetch weather info
  const fetchWeatherData = async (cityName) => {
    try {
      setIsLoading(true);
      await axios
        .all([
          axios.get(
            `${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`
          ),
          axios.get(
            `${api.base}forecast?q=${cityName}&units=metric&APPID=${api.key}`
          ),
        ])
        .then(
          axios.spread((...responses) => {
            console.log(responses[0].data);
            console.log(responses[1].data);
            setCurrentWeather(responses[0].data);
            setWeatherForcast(responses[1].data);
          })
        )
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    if (cityName) {
      fetchWeatherData(cityName);
    }
  }, [cityName]);

  const setCityNameHandler = (cityname) => {
    setCityName(cityname);
  };
  // const forecastData =
  let content = <p>No weather available</p>;

  if (error) {
    content = <p>Error: {error}</p>;
  }
  if (isLoading) {
    content = <p>Loading</p>;
  }

  if (typeof currentWeather.main != "undefined") {
    content = <CurrentWeather weather={currentWeather} />;
  }
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
            {"  "}By Mako
          </a>
        </span>
      </header>
      <main>
        <div className="section1">
          <div className="search">
            <Search onSubmitHandler={setCityNameHandler} />
          </div>
          <section className="weatherResults">{content}</section>
        </div>
      </main>
    </>
  );
}

export default App;
