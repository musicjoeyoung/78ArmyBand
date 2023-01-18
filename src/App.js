import React from "react";
import "./App.css";
import Home from "./Home";
import MeetTheBand from "./MeetTheBand/MeetTheBand.js";
import History from "./History";
import Ensembles from "./Ensembles/Ensembles";
import Media from "./Media/Media";
import Jobs from "./Jobs/Jobs";
import Contact from "./Contact";

import ErrorNotFound from "./ErrorNotFound";
import TermsOfUse from "./TermsOfUse";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SocialContainer from "./SocialContainer";
import UpArrow from "./UpArrow";

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
            <Route path="/meettheband">
              <MeetTheBand />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/ensembles">
              <Ensembles />
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
      <SocialContainer />
      <Footer />
      <UpArrow />
    </>
  );
};

export default App;
