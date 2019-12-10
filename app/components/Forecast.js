import React from "react";
import PropTypes from "prop-types";

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
            <span className="forecast-summary"> {summary}</span>
            {/* <h1>Icons: {icon}</h1> */}
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
