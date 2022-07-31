import React, { Fragment } from "react";
import ForecastTabs from "./ForecastTabs/ForecastTabs";
import WeatherForcast from "./WeatherForecast/WeatherForecast";

const RightPane = () => {
  return (
    <Fragment>
      <WeatherForcast />
      {/* <ForecastTabs /> */}
    </Fragment>
  );
};

export default RightPane;
