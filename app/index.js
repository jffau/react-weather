import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import Weather from "./pages/Weather";
import Nav from "./components/Nav";
import "./styles/index.css";

import { LocationProvider } from "./contexts/locations";

function App() {
  return (
    <Router>
      <LocationProvider>
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </div>
      </LocationProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
