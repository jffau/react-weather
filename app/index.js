import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import "./index.css";
import { LocationProvider } from "./contexts/locations";

function App() {
  return (
    <Router>
      <div className="container">
        <LocationProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </LocationProvider>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
