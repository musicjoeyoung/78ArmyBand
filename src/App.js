import React from "react";
import "./App.css";
//import Welcome from "./Welcome";
import Home from "./Home";
import About from "./About/About.js";
import Ensembles from "./Ensembles/Ensembles";
import Events from "./Events/Events";
import Media from "./Media";
import Jobs from "./Jobs/Jobs";
import Contact from "./Contact";
import ErrorNotFound from "./ErrorNotFound";
import TermsOfUse from "./TermsOfUse";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
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
            <Route path="/termsofuse">
              <TermsOfUse />
            </Route>
            <Route path="*" component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
