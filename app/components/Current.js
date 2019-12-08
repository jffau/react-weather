import React from "react";
import PropTypes from "prop-types";

const Current = ({ timezone, weather, name }) => {
  const { time, summary, icon, temperature } = weather;

  const location = name.replace(/%20/g, " ");

  let currentTime = new Date(time * 1000);
  currentTime = currentTime.toLocaleString("en-US", timezone);

  return (
    <div>
      Currently:
      <h1> {location}</h1>
      <h1>Time: {currentTime}</h1>
      <h1>Summary: {summary} </h1>
      <h1>Icons: {icon}</h1>
      <h1>Temp: {Math.floor(temperature)} F</h1>
    </div>
  );
};

Current.propTypes = {
  timezone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};

export default Current;
