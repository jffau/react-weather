import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { LocationContext } from "../contexts/locations";
const Nav = props => {
  const { locations, clearLocations, addLocation, removeLocation } = useContext(
    LocationContext
  );

  // reads localStorage on load
  useEffect(() => {
    const data = localStorage.getItem("locations");
    if (data) {
      addLocation(JSON.parse(data));
    }
  }, []);

  // saves to localStorage on change
  useEffect(() => {
    localStorage.setItem("locations", JSON.stringify(locations));
  });

  const handleRemove = id => {
    removeLocation(id);
    props.history.push("/");
  };

  return (
    <nav className="row space-between">
      <ul className="row nav space-between">
        <Link to="/">Search</Link>
        {locations.map(location => (
          <div key={location.id}>
            <Link
              to={{
                pathname: "/weather",
                search: `?lng=${location.lng}&lat=${location.lat}&name=${location.name}`
              }}
            >
              {" "}
              {location.name}{" "}
            </Link>
            <button onClick={() => handleRemove(location.id)}>Remove</button>
          </div>
        ))}
      </ul>
      {locations.length > 0 && (
        <button onClick={clearLocations}>Clear Locations </button>
      )}
    </nav>
  );
};

export default withRouter(Nav);
