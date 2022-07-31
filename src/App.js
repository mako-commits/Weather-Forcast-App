import React, { useState } from "react";
// import Search from "./components/Search";
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
// import InfoDisplay from "./components/UI/InfoDisplay";
import Container from "./components/UI/Container";
// import WeatherForcast from "./components/WeatherForecast/WeatherForecast";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

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
  const [chart, setChart] = useState({
    chartLabels: ["Now"],
    chartData: [],
    chartMin: "",
    chartMax: "",
  });

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

  // let content = <p>No weather available</p>;

  // if (error) {
  //   content = <p>Error</p>;
  // }
  // if (isLoading) {
  //   content = <Spinner />;
  // }

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
      <Container>
        <div>
          <LeftPane
            onSubmitHandler={setCityNameHandler}
            weather={currentWeather}
            loading={isLoading}
            error={error}
          />
          <RightPane forecast={weatherForecast} />
        </div>
      </Container>
    </>
  );
}

export default App;
