import React, { Fragment } from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Search from "./Search";

const LeftPane = (props) => {
  const { weather, onSubmitHandler, loading, error } = props;
  return (
    <Fragment>
      <Search onSubmitHandler={onSubmitHandler} />
      <CurrentWeather weather={weather} loading={loading} error={error} />
    </Fragment>
  );
};

export default LeftPane;
