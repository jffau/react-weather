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
      <LocationProvider>
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/" component={SearchBar} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </div>
      </LocationProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
