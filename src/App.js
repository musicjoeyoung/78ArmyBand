import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";
import Home from "./Home";
import About from "./About";
import Ensembles from "./Ensembles";
import Events from "./Events";
import Media from "./Media";
import Jobs from "./Jobs";
import Contact from "./Contact";
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/ensembles">
              <Ensembles />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*" component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;