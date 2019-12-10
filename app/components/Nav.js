import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { LocationContext } from "../contexts/locations";

import { FaBars, FaTimes, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

import "../styles/nav.css";

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
        <ul className="header">
          <li onClick={onHamburgClicked}>
            <FaBars />
          </li>
          <li>
            <h2>Clutch Weather</h2>
          </li>
        </ul>
      </nav>

      <div className={`sidebar ${sideBar}`}>
        <ul className="header">
          <li onClick={onHamburgClicked} className="close-hamburger">
            <FaTimes />
          </li>
          <li>
            <h2> Clutch Weather</h2>
          </li>
        </ul>
        <ul className="nav-content">
          <li>
            <Link className="btn" to="/" onClick={onSideBarClicked}>
              <FaSearch /> Search
            </Link>
          </li>
          {locations.map(location => (
            <li key={location.id} onClick={onSideBarClicked}>
              <Link
                className="location-links"
                to={{
                  pathname: "/weather",
                  search: `?lng=${location.lng}&lat=${location.lat}&name=${location.name}`
                }}
              >
                <FaMapMarkerAlt />

                {location.name}
              </Link>
              {/* <button> */}
              <FaTimes
                color="#861927"
                onClick={() => handleRemove(location.id)}
              />
              {/* </button>s */}
            </li>
          ))}
          {locations.length > 0 && (
            <li onClick={onSideBarClicked}>
              <span className="btn" onClick={handleClear}>
                Clear Locations{" "}
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default withRouter(Nav);
