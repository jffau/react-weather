import React from "react";
import PropTypes from "prop-types";
import Skycons from "react-skycons";

const Current = ({ timezone, weather, name }) => {
  const { time, summary, icon, temperature } = weather;

  const location = name.replace(/%20/g, " ");

  let currentTime = new Date(time * 1000);
  currentTime = currentTime.toLocaleString("en-US", timezone);

  return (
    <div className="currently">
      <span className="current-location">{location}</span>
      <h3>{currentTime}</h3>

      <div className="icon">
        <Skycons
          color="white"
          icon={icon.toUpperCase().replace(/-/g, "_")}
          autoplay={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <span className="summary">
        {Math.floor(temperature)}˚ F, {summary}{" "}
      </span>
    </div>
  );
};

Current.propTypes = {
  timezone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  weather: PropTypes.object.isRequired
};

export default Current;
