import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Current from "./Current";
import Forecast from "./Forecast";

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
    console.log(props.location);
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
      <>
        <Current timezone={timezone} weather={currently} name={name} />
        <Forecast timezone={timezone} weather={daily.data} />
      </>
    );
  } else return <h1>Loading</h1>;
};

export default Weather;
