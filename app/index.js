import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import "./index.css";
import { LocationContext } from "./contexts/locations";

function App() {
  const [locations, setLocations] = React.useState([]);

  const addLocation = newLocation => {
    setLocations(locations => locations.concat(newLocation));
  };
  const clearLocations = () => {
    setLocations([]);
  };

  return (
    <Router>
      <div className="container">
        <LocationContext.Provider
          value={{ locations, addLocation, clearLocations }}
        >
          <Nav />
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </LocationContext.Provider>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
