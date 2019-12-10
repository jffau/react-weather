import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Current from "../components/Current";
import Forecast from "../components/Forecast";
import "../styles/weather.css";
import SearchBar from "../components/SearchBar";

const Weather = props => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const cors = "https://cors-anywhere.herokuapp.com/";
  const darksky =
    "https://api.darksky.net/forecast/29a65af552717e42c074032ad94d8309/";

  useEffect(() => {
    setLoading(true);
    const { lng, lat } = queryString.parse(props.location.search);
    fetch(`${cors}${darksky}${lat},${lng}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        console.warn(e.message);
        setError(e);
      });
  }, [props.location.search]);

  if (!loading) {
    const { name } = queryString.parse(props.location.search);
    const { timezone, currently, daily } = data;

    return (
      <div className="weather">
        <SearchBar history={props.history} />
        <Current timezone={timezone} weather={currently} name={name} />
        <Forecast timezone={timezone} weather={daily.data} />
        {error && <h1>Error fetching data: {error.message}</h1>}
      </div>
    );
  } else
    return (
      <div className="weather">
        <h1>Loading...</h1>
      </div>
    );
};

export default Weather;
