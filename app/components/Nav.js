import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { LocationContext } from "../contexts/locations";
const Nav = props => {
  const { locations, clearLocations, addLocation, removeLocation } = useContext(
    LocationContext
  );

  const [hamburger, setHamburger] = useState("closed");
  const [sideBar, setSidebar] = useState();

  useEffect(() => {
    setSidebar(hamburger);
  }, [hamburger]);

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

  const handleClear = () => {
    clearLocations();
    props.history.push("/");
  };

  const onHamburgClicked = () => {
    setHamburger(status => (status === "closed" ? "open" : "closed"));
  };
  const onSideBarClicked = () => {
    setSidebar("closed");
  };

  return (
    <>
      <nav className={`topbar ${sideBar}`}>
        <ul>
          <li onClick={onHamburgClicked}>Hamburger</li>
        </ul>
      </nav>
      <div className={`sidebar ${sideBar}`}>
        <ul>
          <li onClick={onHamburgClicked} className="close-hamburger">
            close hamburg
          </li>

          <li>
            <Link to="/" onClick={onSideBarClicked}>
              Search
            </Link>
          </li>
          {locations.map(location => (
            <li key={location.id} onClick={onSideBarClicked}>
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
            </li>
          ))}
          {locations.length > 0 && (
            <li onClick={onSideBarClicked}>
              <button onClick={handleClear}>Clear Locations </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default withRouter(Nav);
