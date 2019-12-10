import React from "react";
import PropTypes from "prop-types";
import Skycons from "react-skycons";

const Forecast = ({ timezone, weather }) => {
  const getWeekday = time => {
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let weekday = new Date(time * 1000);
    return weekdays[weekday.getDay()];
  };

  const getDate = time => {
    let dateString = new Date(time * 1000);
    return `${dateString.getMonth() + 1}/${dateString.getDate()}`;
  };

  return (
    <div className="forecast-container">
      {weather.slice(1, 4).map(day => {
        const { time, summary, icon, temperatureHigh, temperatureLow } = day;
        return (
          <div key={time} className="daily-forecast">
            <span className="forecast-date">
              {getWeekday(time)}, {getDate(time)}
            </span>
            <div className="high-low">
              <span>High: {Math.floor(temperatureHigh)}˚ F</span>
              <span>Low: {Math.floor(temperatureLow)}˚ F</span>
            </div>
            <div className="icon">
              <Skycons
                color="white"
                icon={icon.toUpperCase().replace(/-/g, "_")}
                autoplay={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <span className="forecast-summary"> {summary}</span>
          </div>
        );
      })}
    </div>
  );
};
Forecast.propTypes = {
  timezone: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired
};
export default Forecast;
