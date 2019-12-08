import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "../contexts/locations";
const Nav = () => {
  const { locations, clearLocations } = useContext(LocationContext);

  return (
    <nav className="row space-between">
      <ul className="row nav space-between">
        <Link to="/">Search</Link>
        {locations.map(location => (
          <Link
            key={location.id}
            to={{
              pathname: "/weather",
              search: `?lng=${location.lng}&lat=${location.lat}&name=${location.name}`
            }}
          >
            {" "}
            {location.name}{" "}
          </Link>
        ))}
      </ul>
      {locations.length > 0 && (
        <button onClick={clearLocations}>Clear Locations </button>
      )}
    </nav>
  );
};

export default Nav;
