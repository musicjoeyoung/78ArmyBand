import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Home from "./Home";
import ErrorNotFound from "./ErrorNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="*" component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
