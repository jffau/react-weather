import React from "react";
import PropTypes from "prop-types";

const Current = ({ timezone, weather, name }) => {
  const { time, summary, icon, temperature } = weather;

  const location = name.replace(/%20/g, " ");

  let currentTime = new Date(time * 1000);
  currentTime = currentTime.toLocaleString("en-US", timezone);

  return (
    <div className="currently">
      <span className="current-location">{location}</span>
      <h3>{currentTime}</h3>

      <span className="summary">
        {Math.floor(temperature)}˚ F, {summary}{" "}
      </span>

      {/* <h1>Icons: {icon}</h1> */}
    </div>
  );
};

Current.propTypes = {
  timezone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};

export default Current;
