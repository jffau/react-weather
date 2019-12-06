import React, { useContext } from "react";
import { LocationContext } from "../contexts/locations";
const Nav = () => {
  const { locations, clearLocations } = useContext(LocationContext);

  return (
    <nav className="row space-between">
      <ul className="row nav space-around">
        <li>Search</li>
        {locations.map(location => (
          <li>{location}</li>
        ))}
      </ul>
      {locations.length > 0 && (
        <button onClick={clearLocations}>Clear Locations </button>
      )}
    </nav>
  );
};

export default Nav;
