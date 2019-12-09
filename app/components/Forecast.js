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

  return weather.slice(1, 4).map(day => {
    const { time, summary, icon, temperatureHigh, temperatureLow } = day;
    return (
      <div key={time}>
        <h1>Weekday: {getWeekday(time)}</h1>
        <h1>Date: {getDate(time)}</h1>
        <h1>Summary: {summary}</h1>
        <h1>Icons: {icon}</h1>
        <h1>Temp High: {Math.floor(temperatureHigh)} F</h1>
        <h1>Temp Low: {Math.floor(temperatureLow)} F</h1>
        <hr></hr>
      </div>
    );
  });
};
Forecast.propTypes = {
  timezone: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired
};
export default Forecast;
